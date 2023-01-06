import express from "express"
import routes from "./routes.js"
import mongodb from "./models/config/mongodb.config.js"
import "./models/config/dotenv.config.js"
import cors from 'cors';
import Cloudinary from 'cloudinary';
import expressFileUpload from 'express-fileupload';
import morgan from "morgan";
const cloudinary = Cloudinary.v2;
const PORT = Number.parseInt(process.env.SERVER_PORT || "")

cloudinary.config({
    cloud_name :'file-upload',
    api_key:'731456294949825',
    api_secret:'FBVBUiPRE6xJmS_pEWWxjIhYMWU' 
  });
!async function () {

    mongodb.open()
    const app = express()
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors('*'))
    app.use(morgan("dev"))
    app.use(expressFileUpload({useTempFiles: true}))
    app.use(routes)


    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
} ()