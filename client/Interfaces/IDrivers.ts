// import { ReactNode } from "react";
type ReactNode = any

export interface IDrivers {
  _id: string;
  firstName: string;
  lastName: string;
  license: Date | string | ReactNode;
  createdAt: Date | string | ReactNode;
  // nombre: string
}
