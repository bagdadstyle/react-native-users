import express from "express";
import {
  getDrivers,
  postDriver,
  deleteDriver,
  updateDriver,
} from "../controllers/drivers/drivers";

const router = express.Router();

router.get("/", getDrivers);
router.get("/:id", getDrivers)
router.post("/", postDriver);
router.put("/", updateDriver);
router.delete("/", deleteDriver);

/**
 * @swagger
 * components:
 *   schemas:
 *     Driver:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Mongoose ObjectID
 *         firstName:
 *           type: string
 *           description: First name driver.
 *         lastName:
 *           type: string
 *           description: Last name driver.
 *         license:
 *           type: date
 *           description: license expiration date.
 *       required:
 *         - firstName
 *         - lastName
 *         - license
 *       example:
 *         firstName: "Harry"
 *         lastName: "Potter"
 *         license: 2022-12-27T18:10:39.585Z
 *
 *
 */
/**
 * @swagger
 * /drivers:
 *  get:
 *    summary: Get all Drivers.
 *    tags: [Drivers]
 *    responses:
 *      200:
 *        description: All Drivers.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Driver'
 *
 */
/**
 * @swagger
 * /drivers:
 *  post:
 *    summary: Create new Driver.
 *    tags: [Drivers]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Driver'
 *    responses:
 *      201:
 *        description: POST Created.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /drivers:
 *  put:
 *    summary: Update driver by mongo ID.
 *    tags: [Drivers]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Driver'
 *    responses:
 *      201:
 *        description: PUT Updated.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /drivers:
 *  delete:
 *    summary: Delete driver by mongo ID.
 *    tags: [Drivers]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Driver'
 *    responses:
 *      201:
 *        description: DELETED.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /drivers/:id:
 *  get:
 *    summary: Get driver by ID (Params).
 *    tags: [Drivers]
 *    responses:
 *      200:
 *        description: Get Driver by mongo ID (Params).
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Driver'
 *
 */

export default router;
