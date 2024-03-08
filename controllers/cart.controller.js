const Product = require("../models/product.model")

exports.addCartItem = async (req, res, next) => {

    let product;

    try {
        product = await Product.fincById(req.body.productId) 
    } catch (error) {
        return next(error)
    }

    const cart = res.locals.cart
    cart.addItem(product)
    req.session.cart = cart

    res.status(201).json({
        message: "Cart Updated!",
        newTotalItems: cart.totalQuantity
    })
}