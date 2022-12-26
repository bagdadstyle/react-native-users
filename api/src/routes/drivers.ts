import express from "express";
import {
  getDrivers,
  postDriver,
  deleteDriver,
  updateDriver,
} from "../controllers/drivers/drivers";

const router = express.Router();

router.get("/", getDrivers);
router.post("/", postDriver);
router.put("/", updateDriver);
router.delete("/", deleteDriver);

export default router;
