import React from "react";
import { IDrivers } from "./IDrivers";

export interface IUser {
  _id?: string;
  name: string;
  departure: string;
  arrival: string;
  drivers?: IDrivers[];
  createdAt: string;
  // children?: JSX.Element|JSX.Element[] | React.ReactNode;
}
