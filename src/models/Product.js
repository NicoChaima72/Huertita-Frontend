const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const ProductSchema = new Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	photo_url: { type: String, required: true }, // 0 normal | 1 admin
});

ProductSchema.plugin(uniqueValidator, {
	message: "{PATH} ya está registrado",
});

module.exports = mongoose.model("Product", ProductSchema);
