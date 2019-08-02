const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fridgeSchema = new Schema({
    family_id: { type: String },
    user_id: { type: String, required: true },
    products: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Fridge = mongoose.model("Fridge", fridgeSchema);
module.exports = Fridge;
