import express from "express";
import {
  getTravels,
  postTravels,
  updateTravel,
  deleteTravel,
  relationTravels,
} from "../controllers/travels/travels";

const router = express.Router();

router.get("/", getTravels);
router.get("/get", relationTravels);
router.post("/", postTravels);
router.put("/", updateTravel);
router.delete("/", deleteTravel);

export default router;
