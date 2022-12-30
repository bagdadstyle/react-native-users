import mongoose from "mongoose";

const travelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
    },
    departure: {
      type: Date,
      require: true,
    },
    arrival: {
      type: Date,
      require: true,
    },
    drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Driver" }],
  },
  { timestamps: true, updatedAt: false, versionKey: false }
);

export default mongoose.model("Travel", travelSchema);
