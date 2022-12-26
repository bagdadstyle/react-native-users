import express from "express";
import travels from "./travels";

const router = express.Router();

router.use("/travels", travels);

export default router;
