import mongoose from "mongoose";

const travelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    departure: {
      type: Date,
      require: true,
    },
    arrival: {
      type: Date,
      require: true,
    },
    drivers: {
      type: mongoose.Types.ObjectId,
    },
  },
  { timestamps: true, updatedAt: false }
);

export default mongoose.model("travels", travelSchema);
