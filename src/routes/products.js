const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/product", async (req, res) => {
	const products = await Product.find();

	res.render("pages/products.html", {
		title: "Productos",
		file: "product",
		products,
	});
});

router.post("/product", (req, res) => {});

router.get("/product/:id", (req, res) => {});

router.put("/product/:id", (req, res) => {});

router.delete("/product/:id", (req, res) => {});

module.exports = router;
