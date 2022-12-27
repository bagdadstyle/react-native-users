import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    payment: {
      type: Number,
    },
    date: {
      type: Date,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
  },
  { timestamps: true, updatedAt: false }
);

export default mongoose.model("Payment", paymentSchema);
