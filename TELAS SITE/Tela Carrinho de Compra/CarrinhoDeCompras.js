if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else{
    ready()
}


function ready(){
    const removeProductButtons = document.getElementsByClassName("Remove")
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", removeProduct)
    }

    const quantityInputs = document.getElementsByClassName("QtdProdNumb")
    for (var i =0; quantityInputs.length; i++){
        quantityInputs[i].addEventListener("change", updateTotal)
 
    }

    
}



function removeProduct(event){
    event.target.parentElement.parentElement.parentElement.parentElement.remove()
    updateTotal()
}

function updateTotal() {
let totalAmount = 0
const cartProduct = document.getElementsByClassName("Car_Prod")
for (var i = 0; i < cartProduct.length; i++) {
    const productPrice = cartProduct[i].getElementsByClassName("Real_Preco")[0].innerText.replace("R$", "").replace(",",".")
    const productQuantity = cartProduct[i].getElementsByClassName("QtdProdNumb")[0].value

    totalAmount += productPrice * productQuantity
}
totalAmount = totalAmount.toFixed(2)
totalAmount = totalAmount.replace(".",",")
document.querySelector(".Total_Price h2").innerText = "R$" + totalAmount
}

document.querySelector("#cupons").addEventListener('keyup' , (e) =>{
    let ss = e.target.selectionStart;
    let se = e.target.selectionEnd;
    e.target.value = e.target.value.toUpperCase();
    e.target.selectionStart = ss;
    e.target.selectionEnd = se;
});

