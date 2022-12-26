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
  },
  { timestamps: true, updatedAt: false }
);

export default mongoose.model("Travels", travelSchema);
