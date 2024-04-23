export const getUserLocation = async(): Promise<[number,number]> =>{
    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve([coords.longitude,coords.latitude])
            },
            (err)=>{
                alert("Error al obtener la geolocalizacion")
                console.error(err);
                reject();
            }
        );
    });
}