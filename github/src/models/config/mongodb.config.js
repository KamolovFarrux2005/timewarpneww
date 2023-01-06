import mongoose from "mongoose";
import "./dotenv.config.js"

const open = () => {
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('Mongodb successfully connected!');
    }).catch((err)=>{
        console.log('Mongodb connection rejected!');
        console.log(err.message);
    })
}

export default {
    open
}