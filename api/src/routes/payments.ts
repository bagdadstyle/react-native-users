import express from "express";
import {
  deletePayment,
  getOnePayment,
  getPayments,
  postPayment,
  updatePayment,
  getHistory,
} from "../controllers/payments/payments";

const router = express.Router();

router.get("/", getPayments);
router.post("/one", getOnePayment);
router.post("/history", getHistory);
router.post("/", postPayment);
router.put("/", updatePayment);
router.delete("/", deletePayment);

export default router;
