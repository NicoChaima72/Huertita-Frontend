const express = require("express");
const router = express.Router();
const axios = require("axios");

const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const products = await axios.get(`${res.locals.API}/`);

  res.render("pages/home.html", {
    title: "Inicio",
    file: "home",
    products: products.data.products,
  });
});

router.get("/about", (req, res) => {
  res.render("pages/about.html", { title: "Nosotros", file: "about" });
});

module.exports = router;
