import express from "express";
import {
  getTravels,
  postTravels,
  updateTravel,
  deleteTravel,
  relationTravels,
  getOneTravel,
} from "../controllers/travels/travels";

const router = express.Router();

router.get("/", getTravels);
router.get("/get", relationTravels);
router.post("/", postTravels);
router.post("/one", getOneTravel);
router.put("/", updateTravel);
router.delete("/", deleteTravel);

export default router;
