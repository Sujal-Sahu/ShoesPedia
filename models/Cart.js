const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  email: {
    type: String,
    default: '',
    required: true
  },
  productid: {
    type: {
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      size: { type: String, required: true },
      variants: { type: String, required: true },
      name: { type: String, required: true }
    },
    required: true
  }
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model("Cart", CartSchema);