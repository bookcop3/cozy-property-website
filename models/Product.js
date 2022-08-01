import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    product_type: { type: String, required: true },
    product_used: { type: String, required: true },
    details: { type: String, required: true },
    address: { type: String, required: true },
    status_seller: { type: String, required: true },
    floor_num: { type: String, required: true },
    building: { type: String, required: true },
    product_area: { type: String, required: true },
    bedrooms_num: { type: String, required: true },
    bathrooms_num: { type: String, required: true },
    image: { type: String, required: true },
    telephone_number: { type: String, required: true },
    sales_type: { type: String, required: true },
    price: { type: Number, required: true },
    price_h: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
