const Product = require("../models/product.model");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.render("customer/products/all-products", { products });
  } catch (error) {
    next(error);
  }
};

exports.getProductDetails = async (req, res, next) => {
  const prodId = req.params.id;

  try {
    const product = await Product.fincById(prodId);
    res.render("customer/products/product-details", { product });
  } catch (error) {
    next(error);
  }
};
