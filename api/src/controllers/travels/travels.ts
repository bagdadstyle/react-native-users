import { Request, Response } from "express";
import Travels from "../../models/travels";
import { ITravel } from "../../interfaces/ITravel";
import * as travelService from "../../services/travels/travels";

export const getOneTravel = async (req: Request, res: Response) => {
  try {
    const data = await travelService.getOneTravel(req.body._id);
    return res.send(data);
  } catch (e) {
    console.log(`GET/ONETRAVEL ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const getTravels = async (req: Request, res: Response) => {
  try {
    // const { id } = req.params;
    const data = await travelService.getTravels();
    return res.send(data);
  } catch (e) {
    console.log(`GET/TRAVELS ${e}`);
    return res.send("Hubo un error");
  }
};

export const postTravels = async (req: Request, res: Response) => {
  const { name, departure, arrival, drivers, userName }: ITravel = req.body;
  try {
    const data = await travelService.postTravels(
      name,
      departure,
      arrival,
      drivers!,
      userName!
    );
    return res.send(data);
  } catch (e) {
    console.log(`POST/TRAVELS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const updateTravel = async (req: Request, res: Response) => {
  const { _id, name, departure, arrival, drivers }: ITravel = req.body;
  try {
    const data = await travelService.updateTravel(
      _id!,
      name,
      departure,
      arrival,
      drivers!
    );
    return res.status(201).send(data);
  } catch (e) {
    console.log(`PUT/TRAVELS ${e}`);
    return res.status(400).send("Hubo un error");
  }
};

export const deleteTravel = async (req: Request, res: Response) => {
  try {
    const data = await travelService.deleteTravel(req.body._id);
    return res.status(201).send(data);
  } catch (e) {
    console.log(e);
    return res.status(400).send("Hubo un error");
  }
};

// export const relationTravels = async (req: Request, res: Response) => {
//   try {
//     const data = await Travels.aggregate([
//       {
//         $lookup: {
//           from: "Driver",
//           localField: "Travel",
//           foreignField: "_id",
//           as: "traveldrivers",
//         },
//       },
//     ]);
//     console.log(`RESULT ---> ${JSON.stringify(data)}`);
//     return res.send(data);
//   } catch (e) {
//     console.log(`POST/RELATION ${e}`);
//     return res.status(400).send("Hubo un error");
//   }
// };
