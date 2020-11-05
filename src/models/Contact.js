const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
	name: { type: String, required: true, unique: true },
	email: { type: String, required: true },
	phone: { type: Number, required: true },
	description: { type: String, required: true }, // 0 normal | 1 admin
	state: { type: String, default: 0 }, // 0 normal | 1 admin
});

module.exports = mongoose.model("Contact", ContactSchema);
