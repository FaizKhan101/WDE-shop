
exports.addCartItem = (req, res, next) => {
    res.locals.cart.addItem()
}