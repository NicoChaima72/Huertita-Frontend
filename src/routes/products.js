const express = require("express");
const Product = require("../models/Product");
const axios = require("axios");
const router = express.Router();

router.get("/product", async (req, res) => {
  const products = await axios.get(`${res.locals.API}/products`);

  res.render("pages/products.html", {
    title: "Productos",
    file: "product",
    products: products.data.products,
  });
});

router.get("/product/:id", async (req, res) => {
  const product = await axios.get(
    `${res.locals.API}/products/${req.params.id}`
  );
  res.render("pages/product.html", {
    title: product.name + " - ver producto",
    file: "",
    product: product.data.product,
  });
});

module.exports = router;
