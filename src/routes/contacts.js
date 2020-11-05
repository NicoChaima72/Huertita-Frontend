const express = require("express");
const router = express.Router();

router.get("/contact", (req, res) => {
	res.send("Hola contact");
});

router.post("/contact", (req, res) => {});

router.get("/contact/:id", (req, res) => {});

router.put("/contact/:id", (req, res) => {});

router.delete("/contact/:id", (req, res) => {});

module.exports = router;
