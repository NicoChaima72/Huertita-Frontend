const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/", (req, res) => {
	Product.find()
		.limit(6)
		.exec((err, products) => {
			res.render("pages/home.html", {
				title: "Inicio",
				file: "home",
				products,
			});
		});
});

router.get("/about", (req, res) => {
	res.render("pages/about.html", { title: "Nosotros", file: "about" });
});

module.exports = router;
