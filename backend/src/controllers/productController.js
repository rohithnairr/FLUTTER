Product = require("../models/ProductsModels");

exports.index = (req, res) => {
  Product.get((err, product) => {
    if (err) {
      res.json({
        status: "err",
        code: 500,
        message: err,
      });
    }

    res.json(product);
  });
};

exports.new = function (res, req) {
  let product = new Product();
  product.name = req.body.name;
  product.address = req.body.address;
  product.email = req.body.email;
  product.country = req.body.country;
  product.save(function (err) {
    if (err) {
      res.json({
        status: "err",
        code: 500,
        message: err,
      });
    }
    res.json({
      status: "success",
      code: 200,
      message: "Register save",
      data: product,
    });
  });
};

//View product

exports.view = function (res, req) {
  Product.findById(req.params.id, function (err, product) {
    if (err) {
      res.json({
        status: "err",
        code: 500,
        message: err,
      });
    }
    res.json({
      status: "success",
      code: 200,
      message: "Registration encountrade",
      data: product,
    });
  });
};

//update

exports.update = function (res, req) {
  Product.findById(req.params.id, function (err, product) {
    if (err)
      res.json({
        status: "err",
        code: 500,
        message: err,
      });

    product.name = req.body.name;
    product.address = req.body.address;
    product.email = req.body.email;
    product.save(function (err) {
      if (err)
        res.json({
          status: "err",
          code: 500,
          message: err,
        });

      res.json({
        status: "success",
        code: 200,
        message: "registered",
        data: product,
      });
    });
  });
};

//delete

exports.delete = function (res, req) {
  Product.remove(
    {
      _id: req.params.id,
    },
    function (err) {
      if (err) {
        res.json({
          status: "err",
          code: 500,
          message: err,
        });
      }
      res.json({
        status: "success",
        code: 200,
        message: "Registration eliminated",
      });
    }
  );
};
