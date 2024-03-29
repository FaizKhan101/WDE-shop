const addToCartBtnElement = document.querySelector("#product-details button");
const cartBadgeElement = document.querySelector(".nav-items .badge")

const addToCart = async () => {
    const productId = addToCartBtnElement.dataset.productid
    const csrfToken = addToCartBtnElement.dataset.csrf
    let response
    try {
        response = await fetch("/cart/items", {
            method: "POST",
            body: JSON.stringify({
                productId: productId,
                _csrf: csrfToken
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        alert("Something went wrong!")
        return;
    }

    if (!response.ok) {
        alert("Something went wrong!")
        return
    }

    const responseData = await response.json()

    const newTotalItems = responseData.newTotalItems

    cartBadgeElement.textContent = newTotalItems

}

addToCartBtnElement.addEventListener("click", addToCart)