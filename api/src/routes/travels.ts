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
//GET TRAVELS
router.get("/", getTravels);

router.post("/one", getOneTravel);
router.get("/get", relationTravels);
router.post("/", postTravels);
router.put("/", updateTravel);
router.delete("/", deleteTravel);

/**
 * @swagger
 * components:
 *   schemas:
 *     Travel:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Mongoose ObjectID
 *         name:
 *           type: string
 *           description: Travel name.
 *         departure:
 *           type: date
 *           description: Departure time.
 *         arrival:
 *           type: date
 *           description: Arrival time.
 *         drivers:
 *           type: array
 *           items:
 *             type: string
 *           description: Driver mongoose.Types.ObjectID.
 *       required:
 *         - name
 *         - departure
 *         - arrival
 *         - drivers
 *       example:
 *         name: Travel Name
 *         departure: 2022-12-27T18:10:39.585Z
 *         arrival: 2022-12-27T18:10:39.585Z
 *         drivers: ["63ab3331adde5086dd6c276c"]
 *         create date: 11-12-22
 *
 *
 */
/**
 * @swagger
 * /travels:
 *  get:
 *    summary: Get all travels.
 *    tags: [Travels]
 *    responses:
 *      200:
 *        description: All Travels.
 *      401:
 *        description: Error.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Travel'
 *
 */
/**
 * @swagger
 * /travels/one:
 *  post:
 *    summary: Search by mongo ID.
 *    tags: [Travels]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Travel'
 *    responses:
 *      200:
 *        description: GET Specific travel.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /travels:
 *  post:
 *    summary: Create new travel.
 *    tags: [Travels]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Travel'
 *    responses:
 *      201:
 *        description: POST Created.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /travels:
 *  put:
 *    summary: Update Travel by ID.
 *    tags: [Travels]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Travel'
 *    responses:
 *      201:
 *        description: PUT Updated.
 *      401:
 *        description: Error.
 *
 */
/**
 * @swagger
 * /travels:
 *  delete:
 *    summary: Delete travel by ID.
 *    tags: [Travels]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Travel'
 *    responses:
 *      201:
 *        description: Deleted.
 *      401:
 *        description: Error.
 *
 */
export default router;
