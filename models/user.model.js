const bcrypt = require("bcryptjs");

const db = require("../data/database");

class User {
  constructor(email, password, fullname, street, postalCode, city) {
    this.email = email;
    this.password = password;
    this.fullname = fullname;
    this.address = {
      street: street,
      postalCode: postalCode,
      city: city,
    };
  }

  async signup() {
    const hashPass = await bcrypt.hash(this.password, 12);
    return db.getDb().collection("users").insertOne({
      email: this.email,
      password: hashPass,
      fullname: this.fullname,
      address: this.address,
    });
  }
}

module.exports = User