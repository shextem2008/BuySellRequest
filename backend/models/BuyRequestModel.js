import mongoose from 'mongoose';

const buyrequestSchema = new mongoose.Schema(
  {
    itemname: { type: String, required: true},
    storagesize: { type: String, required: true },
    capacitytype: { type: Number, required: true },
    refcode: { type: Number, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    currencytype: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    images: [String],
  },
  {
    timestamps: true,
  }
);

const BuyRequest = mongoose.model('BuyRequest', buyrequestSchema);
export default BuyRequest;
