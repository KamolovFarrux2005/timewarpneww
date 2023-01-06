import mongoose from "mongoose";

const videosModel = new mongoose.Schema({
    id: Number,
    title: String,
    status: String
})

export const model = mongoose.model("new-videos", videosModel)