import { Router } from "express";

export const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        message: "Backend is on"
    })
})

userRouter.post('/signin', (req, res) => {
    
})

userRouter.get('/content', (req, res) => {
    
})

// module.exports = {
//     userRouter
// }