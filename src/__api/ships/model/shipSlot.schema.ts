import mongoose from "mongoose";

const shipSlotSchema = new mongoose.Schema<IShipSlot>({
  item: { type: String },
});

export const MongooseShipSlot = mongoose.model<IShipSlot>("ShipSlot", shipSlotSchema);
