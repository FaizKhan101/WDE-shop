exports.getProducts = (req, res, next) => {
    res.render("admin/products/all-products")
}

exports.getNewProducts = (req, res, next) => {
    res.render("admin/products/new-product")
}