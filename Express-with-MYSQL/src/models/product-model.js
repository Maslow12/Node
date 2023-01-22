import mongoose from mongoose
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;