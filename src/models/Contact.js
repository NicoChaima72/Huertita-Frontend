const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: Number, required: true },
	message: { type: String, required: true },
	state: { type: Number, default: 0 }, // 0 pendiente | 1 realizado
	description: { type: String },
	dateShow: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);
