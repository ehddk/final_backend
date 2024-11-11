import mongoose from "mongoose";

const postSchema = new mongoose.Schema<IPost>(
  {
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
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const MongoosePost = mongoose.model<IPost>("Post", postSchema);
