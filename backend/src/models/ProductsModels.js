let mongoose = require("mongoose");

let productShema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: String,
  email: String,
  country: String,
  create: {
    type: Date,
    default: Date.now,
  },
});

let Product = (module.exports = mongoose.model("product", productShema));

module.exports.get = function (callback, limit) {
  Product.find(callback).limit(limit);
};
