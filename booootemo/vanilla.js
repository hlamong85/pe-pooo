function addTotal() {

    const totalCostText = document.getElementById('total-price').innerText;
    const totalCostInt = parseInt(totalCostText)

    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCostInt = parseInt(memoryCostText)

    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCostInit = parseInt(storageCostText)

    const deliveryCostText = document.getElementById('delivery-charge').innerText;
    const deliveryCostInt = parseInt(deliveryCostText)

    const productTotalPrice = totalCostInt + memoryCostInt + storageCostInit + deliveryCostInt;


    document.getElementById('total-amount').innerText = productTotalPrice;


    document.getElementById('bottom-total').innerText = productTotalPrice;
}


function memoryCost(memory) {
    document.getElementById('memory-cost').innerText = memory;
    addTotal()


}
function storageTotal(storage) {


    document.getElementById('storage-cost').innerText = storage;
    addTotal()

}
function deliveryCost(charge) {
    document.getElementById('delivery-charge').innerText = charge;
    addTotal()
}

// --------------memory buttons---------------
document.getElementById('total-memory').addEventListener('click', function () {
    memoryCost(0)
})
document.getElementById('store-memory').addEventListener('click', function () {
    memoryCost(180)



})

// ----------------Storage buttons------------
document.getElementById('storage-case').addEventListener('click', function () {
    storageTotal(0)
})
document.getElementById('storage-plus').addEventListener('click', function () {
    storageTotal(100)

})
document.getElementById('storage-ultra').addEventListener('click', function () {
    storageTotal(180)

})
// -------Delivery buttons-------

document.getElementById('first-charge').addEventListener('click', function () {
    deliveryCost(0)

})
document.getElementById('second-charge').addEventListener('click', function () {
    deliveryCost(20)
})

// --------------------
// ----------------------promocode-------------------------
document.getElementById('apply-btn').addEventListener('click', function () {
    const promo = document.getElementById('promo-code')
    const promoText = promo.value;
    if (promoText.includes('stevekaku')) {
        const bottomTotalText = document.getElementById('bottom-total');
        const bottomTotalValue = bottomTotalText.innerText
        const bottomTotal = parseInt(bottomTotalValue);
        const amount = bottomTotal * 0.2;
        const subtractAmount = bottomTotal - amount;
        console.log(subtractAmount);
        bottomTotalText.innerText = subtractAmount;

    }
})
//disable links
function myButton() {
    document.getElementById("apply-btn").disabled = true;
}
