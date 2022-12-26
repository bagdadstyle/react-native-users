import express from "express";
import travels from "./travels";
import drivers from "./drivers";

const router = express.Router();

router.use("/travels", travels);
router.use("/drivers", drivers);

export default router;
