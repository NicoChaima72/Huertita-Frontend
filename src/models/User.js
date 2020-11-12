const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, default: "USER_ROLE" }, // USER_ROLE | ADMIN_ROLE
	state: { type: String, default: "1" }, // 0 dado de baja | 1 activo | 2 actualizando password
	date: { type: Date, default: Date.now },
	token: { type: String },
});



module.exports = mongoose.model("User", UserSchema);
