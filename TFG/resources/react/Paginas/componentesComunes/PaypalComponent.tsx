import { useState, useEffect } from "react";
import {
	PayPalScriptProvider,
	BraintreePayPalButtons,
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import React from "react";

// This values are the props in the UI
const style = {"label":"paypal","layout":"vertical"};
const amount = "2";

const ButtonWrapper = ({ currency }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);

	return (<BraintreePayPalButtons
		disabled={false}
		fundingSource="paypal" // Available values are: ["paypal", "card", "credit", "paylater", "venmo"]
		forceReRender={[style, amount]}
		createOrder={function (data, actions) {
			return actions.braintree
				.createPayment({
					flow: "checkout",
					amount: amount, // Here change the amount if needed
					currency: "USD", // Here change the currency if needed
					intent: "capture",
					enableShippingAddress: true,
					shippingAddressEditable: false,
					shippingAddressOverride: {
						recipientName: "Scruff McGruff",
						line1: "1234 Main St.",
						line2: "Unit 1",
						city: "Chicago",
						countryCode: "US",
						postalCode: "60652",
						state: "IL",
						phone: "123.456.7890",
					},
				})
				.then((orderId) => {
					// Your code here after create the order
					return orderId;
				});
		}}
		onApprove={function (data, actions) {
			return actions.braintree
				.tokenizePayment(data)
				.then((payload) => {
					// Your code here after capture the order
					console.log(JSON.stringify(payload));
				});
			}
		}
	/>);
};

export default function App() {
	const [clientToken, setClientToken] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await (
				await fetch(
					"https://react-paypal-js-storybook.fly.dev/api/braintree/generate-client-token",
					{ method: "POST" }
				)
			).json();
			setClientToken(response?.client_token || response?.clientToken);
		})();
	}, []);

	return (
		<>
			{clientToken ? (
				<div style={{ maxWidth: "750px", height:"fit-content", marginTop:"3px"}}>
					<PayPalScriptProvider
						options={{
							clientId: "test",
							components: "buttons",
							// dataUserIdToken: "your-tokenization-key-here",
							dataClientToken: clientToken,
							intent: "capture",
							vault: false,
						}}
						
						>
						<ButtonWrapper currency={"USD"} />
					</PayPalScriptProvider>
				</div>
			) : (
				<h1>Loading token...</h1>
			)}
		</>
	);
}