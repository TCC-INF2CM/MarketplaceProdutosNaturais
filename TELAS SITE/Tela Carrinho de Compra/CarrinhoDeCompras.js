const removeProductButtons = document.getElementsByClassName("Remove")
for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.parentElement.remove()
    })
}



const cartProduct = document.getElementsByClassName("Car_Prod")
for (var i = 0; i < cartProduct.length; i++) {
    console.log(cartProduct[i])
    const productPrice = cartProduct[i].getElementsByClassName("Real_Preco")[0].innerText
    const productQuantity = cartProduct[i].getElementsByClassName("Prod_Qtd")[0].value
    console.log(productQuantity)
}