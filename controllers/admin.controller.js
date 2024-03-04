exports.getProducts = (req, res, next) => {
    res.render("admin/products/all-products")
}

exports.getNewProducts = (req, res, next) => {
    res.render("admin/products/new-product")
}

exports.createProduct = (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    res.redirect("/admin/products")
}