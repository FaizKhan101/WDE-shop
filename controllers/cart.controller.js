const Product = require("../models/product.model");

exports.getCart = (req, res, next) => {
  res.render("customer/cart/cart");
};

exports.addCartItem = async (req, res, next) => {
  let product;

  try {
    product = await Product.fincById(req.body.productId);
  } catch (error) {
    return next(error);
  }

  const cart = res.locals.cart;
  cart.addItem(product);
  req.session.cart = cart;

  res.status(201).json({
    message: "Cart Updated!",
    newTotalItems: cart.totalQuantity,
  });
};

exports.updateCateItem = async (req, res, next) => {
  const cart = req.locals.cart;

  const updatedItemData = await cart.updateItem(
    req.body.productId,
    req.body.quantity
  );

  req.session.cart = cart;

  res.status(201).json({
    message: "Item Updated",
    updatedCartData: {
      newTotalQuantity: cart.totalQuantity,
      newTotalPrice: cart.totalPrice,
      updatedItemPrice: updatedItemData.updateItemPrice,
    },
  });
};
