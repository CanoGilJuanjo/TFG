import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Box } from "@chakra-ui/react";

interface PaypalButtonInterface {
    totalValue: string;
    invoice: string;
}

const PaypalComponent: React.FC<PaypalButtonInterface> = (props) => {
    return (
        <PayPalScriptProvider
            options={{ "clientId": "AVZx7n8gCe07qzKYJiMnCTIf7RVr-qgyvE5NefjZtSxmksFg-T3z1NfwJ5NuOIVYm21cek--DMA7WozN", currency: "EUR" }}
        >
            <Box bg={"transparent"} id="paypal-button-container">
                <PayPalButtons
                    style={{
                        color: "blue",
                        shape: "pill",
                        label: "pay",
                        height: 40,
                    }}
                    createOrder={(data, actions) => {
                        return fetch(
                            "/demo/checkout/api/paypal/order/create/",
                            {
                                method: "post",
                            }
                        )
                            .then((res) => res.json())
                            .then((orderData) => orderData.id);
                    }}
                    onApprove={(data, actions) => {
                        return fetch(
                            `/demo/checkout/api/paypal/order/${data.orderID}/capture/`,
                            {
                                method: "post",
                            }
                        )
                            .then((res) => res.json())
                            .then((orderData) => {
                                const errorDetail =
                                    Array.isArray(orderData.details) &&
                                    orderData.details[0];
                                if (
                                    errorDetail &&
                                    errorDetail.issue === "INSTRUMENT_DECLINED"
                                ) {
                                    return actions.restart();
                                }
                                if (errorDetail) {
                                    let msg =
                                        "Sorry, your transaction could not be processed.";
                                    if (errorDetail.description)
                                        msg += `\n\n${errorDetail.description}`;
                                    if (orderData.debug_id)
                                        msg += ` (${orderData.debug_id})`;
                                    return alert(msg);
                                }
                                console.log(
                                    "Capture result",
                                    orderData,
                                    JSON.stringify(orderData, null, 2)
                                );
                                const transaction =
                                    orderData.purchase_units[0].payments
                                        .captures[0];
                                alert(
                                    `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
                                );
                            });
                    }}
                />
            </Box>
        </PayPalScriptProvider>
    );
};

export default PaypalComponent;
