const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	photo_url: { type: String }, // 0 normal | 1 admin
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", ProductSchema);
