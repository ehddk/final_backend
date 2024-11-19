import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema<IInquiry>(
  {
    inquiryType: {
      type: String,
      enum: ["Cancel", "Refund", "Exchange", "etc."],
      required: true,
    },
    title: {
      type: String,
      required: true,
      length: 100,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Processing", "completed"],
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const MongooseInquiry = mongoose.model<IInquiry>("Inquiry", inquirySchema);
