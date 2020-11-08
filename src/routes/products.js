const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
	res.render("pages/products.html", { title: "Productos", file: "product" });
});

router.post("/product", (req, res) => {});

router.get("/product/:id", (req, res) => {});

router.put("/product/:id", (req, res) => {});

router.delete("/product/:id", (req, res) => {});

module.exports = router;
