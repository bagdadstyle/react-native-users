import React from "react";

export interface IUser {
  _id?: string;
  name: string;
  departure: string;
  arrival: string;
  drivers?: string[];
  createdAt: string;
  // children?: JSX.Element|JSX.Element[] | React.ReactNode;
}
