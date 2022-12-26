import express from "express";
import {
  getTravels,
  postTravels,
  updateTravel,
  deleteTravel,
} from "../controllers/travels/travels";

const router = express.Router();

router.get("/", getTravels);
router.post("/", postTravels);
router.put("/", updateTravel);
router.delete("/", deleteTravel);

export default router;
