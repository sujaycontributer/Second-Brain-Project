import { Router } from "express";
import {contentModel, userModel} from '../Database/db'
import jwt from 'jsonwebtoken';
import { JWT_PASSWORD } from "../config";
import { usermiddlware } from "../middleware/userMiddlware";

export const userRouter = Router();



userRouter.post('/signup', async (req, res) => {
   // should be  zod validations And hash the password
    const {username, password } = req.body;

    try{
        await userModel.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: "Signup succesfull!"
        })
    } catch(e){
        res.status(404).json({
            message: "Something error"
        })
    }

})

userRouter.post('/signin', async (req, res) => {
    
    const {username, password} = req.body;
    
    const user = await userModel.findOne({
        username,
        password
    });

    if(user){
        // return jwt here jwt here
        const token = jwt.sign({id: user._id},JWT_PASSWORD);
        res.status(200).json({
            message: "You are signed in",
            token: token
        });
    }else{
        res.status(401).json({
            message: "Invalid user credentials"
        });
    }
})

userRouter.post('/content', usermiddlware, async (req, res) => {
    
    //@ts-ignore
   const {title, link, tag} = req.body;

   await contentModel.create({
    title,
    link,
    //@ts-ignore
    userId: req.userId,
    tags: []
   });
   res.json({
    message: "Content added"
   })

})

userRouter.get('/content', usermiddlware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const findContent = await contentModel.find({
        userId: userId
    }).populate("userId", "username password");

    res.json({
        content: findContent
    })
})