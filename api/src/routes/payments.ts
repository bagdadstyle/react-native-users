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
/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Mongoose ObjectID
 *         payment:
 *           type: number
 *           description: Payment amount.
 *         date:
 *           type: date
 *           description: Departure time.
 *         driver:
 *           type: string
 *           description: Arrival time.
 *       required:
 *         - payment
 *         - date
 *         - driver
 *       example:
 *         payment: 10000
 *         departure: 2022-12-27T18:10:39.585Z
 *         arrival: 2022-12-27T18:10:39.585Z
 *         driver: "63ab3331adde5086dd6c276c"
 *
 *
 */
/**
 * @swagger
 * /payments:
 *  get:
 *    summary: Get all payments.
 *    tags: [Payments]
 *    responses:
 *      200:
 *        description: All Payments.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Payment'
 *
 */
/**
 * @swagger
 * /payments/one:
 *  post:
 *    summary: Search payment by mongo ID.
 *    tags: [Payments]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Payment'
 *    responses:
 *      201:
 *        description: POST Successful.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /payments:
 *  post:
 *    summary: Create a new Payment.
 *    tags: [Payments]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Payment'
 *    responses:
 *      201:
 *        description: POST Successful.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /payments/history:
 *  post:
 *    summary: Search driver history payments.
 *    tags: [Payments]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Payment'
 *    responses:
 *      201:
 *        description: POST Payment history.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /payments:
 *  put:
 *    summary: Update payment by id.
 *    tags: [Payments]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Payment'
 *    responses:
 *      201:
 *        description: PUT Updated.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /payments:
 *  delete:
 *    summary: Delete payment by ID.
 *    tags: [Payments]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Payment'
 *    responses:
 *      201:
 *        description: DELETED.
 *      401:
 *        description: Error.
 *
 */
export default router;
