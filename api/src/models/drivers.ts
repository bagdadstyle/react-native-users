import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    license: {
      type: Date,
      require: true,
    },
    travels: {
      type: mongoose.Types.ObjectId,
    },
  },
  { timestamps: true, updatedAt: false }
);

export default mongoose.model("drivers", driverSchema);
