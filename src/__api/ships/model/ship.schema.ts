import mongoose from "mongoose";

const shipSchema = new mongoose.Schema<IShip>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  isFleetFlagship: { type: Boolean },
  isUserFlagship: { type: Boolean },
  fleet: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true, length: 20 },
  type: { type: mongoose.Schema.Types.ObjectId, ref: "ShipType", required: true },
  status: { type: mongoose.Schema.Types.ObjectId, ref: "ShipStatus", required: true },
  positionX: { type: Number, required: true },
  positionY: { type: Number, required: true },
  slot: [{ type: mongoose.Schema.Types.ObjectId, ref: "ShipSlot" }],
});

export const MongooseShip = mongoose.model<IShip>("Ship", shipSchema);
