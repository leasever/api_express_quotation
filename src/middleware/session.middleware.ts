import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const user = verifyToken(`${jwt}`);
    console.log(user);
    if (!user) {
      res.status(401);
      res.send("TOKEN_INVALID");
    } else {
      req.user = user;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("SESSION_IS_NOT_VALID");
  }
};
export { checkJwt };
