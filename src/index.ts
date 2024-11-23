import express from 'express'
import mongoose from 'mongoose';
import {userRouter} from './routes/user'

const app = express();
app.use(express.json());


app.use('/user/api/v1',userRouter);

const port = 5000;
async function backendStart(){
   try{
    await mongoose.connect("mongodb://localhost:27017/Second-Brain");
    app.listen(port, () => {
        console.log("Backend is running on the port 5000");
        
    })

   }catch(err){
    console.log("Something error occurs");
    
   }
}

backendStart();
