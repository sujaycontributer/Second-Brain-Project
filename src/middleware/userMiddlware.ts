import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { JWT_PASSWORD } from "../config";

export function usermiddlware (req: Request, res: Response, next: NextFunction){
    
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token as string, JWT_PASSWORD);

    if(decoded) {
        //@ts-ignore
        req.userId = decoded.id; // Set the req.id for user route to get req.userId
        next()
    }else {
        res.status(403).json({
            message: "You are not logged in"
        });
    }
}
