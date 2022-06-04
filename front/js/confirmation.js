/**The "getOrderIdToLocation()" function to return the value of the "orderId" for the chosen product on the "cart.html" page */
function getOrderIdToLocation(){
    let pageLocation = window.location.href;
    console.log(pageLocation);
    let newUrl = new URL(pageLocation);
    let newOrderId = newUrl.searchParams.get("orderId");
    return newOrderId;
}

let newOrderId = getOrderIdToLocation();
console.log(newOrderId);
addOrderId();

/**Addition of the "orderId" for the confirmation */
function addOrderId(){
    document
        .getElementById("orderId")
        .innerText = newOrderId;
    console.log(newOrderId);
}
