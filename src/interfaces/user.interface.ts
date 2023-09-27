import { JwtPayload } from "jsonwebtoken";
import { Auth } from "./auth.interface";
import { Request } from "express";

export interface User extends Auth {
  name: string;
  description: string;
}

export interface RequestExt extends Request {
  user?: string | JwtPayload;
}
