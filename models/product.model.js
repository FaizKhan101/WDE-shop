const db = require("../data/database");

class Product {
  constructor(productData) {
    this.title = productData.title;
    this.summary = productData.summary;
    this.price = productData.price;
    this.description = productData.description;
    this.image = productData.image;
    this.imagePath = `products-data/images/${productData.image}`;
    this.imageUrl = `products/assets/images/${productData.image}`;
  }

  save() {
    const productData = {
      title: this.title,
      summary: this.summary,
      price: this.price,
      description: this.description,
      image: this.image,
    };
    return db.getDb().collection("products").insertOne(productData);
  }
}

module.exports = Product;
