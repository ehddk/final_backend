import mongoose from "mongoose";

const shipTypeSchema = new mongoose.Schema<IShipType>({
  name: { type: String, required: true, length: 20, unique: true },
  description: { type: String },
  status: { type: mongoose.Schema.Types.ObjectId, ref: "ShipStatus", required: true },
  image: { type: String },
  slotCount: { type: Number, required: true },
});

export const MongooseShipType = mongoose.model<IShipType>("ShipType", shipTypeSchema);
