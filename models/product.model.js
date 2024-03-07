const { ObjectId } = require("mongodb");
const db = require("../data/database");

class Product {
  constructor(productData) {
    this.title = productData.title;
    this.summary = productData.summary;
    this.price = +productData.price;
    this.description = productData.description;
    this.image = productData.image;
    this.updateImageData()
    if (productData._id) {
      this.id = productData._id.toString();
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

    if (this.id) {
      if (!this.image) {
        delete productData.image
      }
      return db.getDb().collection("products").updateOne({ _id: new ObjectId(this.id)}, { $set: productData })
    } else {
      return db.getDb().collection("products").insertOne(productData);
    }
  }

  updateImageData() {
    this.imagePath = `products-data/images/${this.image}`;
    this.imageUrl = `products/assets/images/${this.image}`;
  }

  replaceImage(newImage) {
    this.image = newImage
    this.updateImageData
  }

  static async findAll() {
    const products = await db.getDb().collection("products").find().toArray();

    return products.map(function (productDoc) {
      return new Product(productDoc);
    });
  }

  static async fincById(prodId) {
    try {
      return db
        .getDb()
        .collection("products")
        .findOne({ _id: new ObjectId(prodId) });
    } catch (error) {
      error.code = 404;
      throw error
    }
  }

  static deleteProductById(prodId) {
    try {
      return db.getDb().collection("products").deleteOne({ _id: new ObjectId(prodId) })
    } catch (error) {
    error.code = 404      
    throw error
    }
  }

}

module.exports = Product;
