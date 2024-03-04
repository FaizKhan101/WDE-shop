const db = require("../data/database");

class Product {
  constructor(productData) {
    this.title = productData.title;
    this.summary = productData.summary;
    this.price = +productData.price;
    this.description = productData.description;
    this.image = productData.image;
    this.imagePath = `products-data/images/${productData.image}`;
    this.imageUrl = `products/assets/images/${productData.image}`;
    if (productData._id) {
      this.id = productData._id.toString()
    }
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

  static async findAll() {
    const products = await db.getDb().collection("products").find().toArray()

    return products.map(function(productDoc) {
      return new Product(productDoc)
    })
  }
}

module.exports = Product;
