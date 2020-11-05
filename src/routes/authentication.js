const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/User");

router.get("/login", (req, res) => {
	res.send("Hola user");
});

router.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true,
	})
);

router.get("/register", (req, res) => {});

router.post("/register", async (req, res) => {
	const { name, email, password, password_confirm } = req.body;
	const errors = [];

	if (name.length === 0) {
		errors.push({ text: "El nombre es requerido" });
	}

	if (password != password_confirm) {
		errors.push({ text: "Las contraseñas no coinciden" });
	}

	if (password.length < 8) {
		errors.push({ text: "La contraseña debe tener minimo 8 caracteres" });
	}

	if (errors.length > 0) {
		res.status(404).json({ ok: false, errors });
	} else {
		const emailUser = await User.findOne({ email: email });
		if (emailUser) {
			res.status(404).json({
				ok: false,
				errors: { text: "El email ya está registrado" },
			});
		}

		const newUser = new User({ name, email, password });
		newUser.password = await newUser.encryptPassword(password);
		await newUser.save();
		res.json({ ok: true, user: newUser });
	}
});

router.post("/logout", (req, res) => {
	req.logOut();
	res.redirect("/");
});

router.get("/reset-password", (req, res) => {});

router.post("/reset-password", (req, res) => {});

module.exports = router;
