const express = require("express");
const router = express.Router();

const { isAuthenticated, isAdmin } = require("../../helpers/auth");

router.get("/admin", (req, res) => {
	res.render("admin/dashboard.html", {
		title: "ADMIN Dashboard",
		file: "admin.dashboard",
	});
});

module.exports = router;
