import mongoose from "mongoose";

const shipStatusSchema = new mongoose.Schema<IShipStatus>({
  attack: { type: Number, required: true },
  defense: { type: Number, required: true },
  health: { type: Number, required: true },
  shield: { type: Number, required: true },
  speed: { type: Number, required: true },
});

export const MongooseShipStatus = mongoose.model<IShipStatus>("ShipStatus", shipStatusSchema);
