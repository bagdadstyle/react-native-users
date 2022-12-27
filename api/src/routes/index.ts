import express from "express";

const router = express.Router();

import travels from "./travels";
router.use("/travels", travels);

import drivers from "./drivers";
router.use("/drivers", drivers);

import payments from "./payments";
router.use("/payments", payments);

export default router;
