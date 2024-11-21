import express from 'express'
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import {userRouter} from './routes/user'

const app = express();
const port = 5000;

app.use('/api/v1/signup',userRouter)

app.listen(port, () => {
    console.log("Listening on the port 5000");
    
});
