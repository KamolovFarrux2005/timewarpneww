import mongoose from "mongoose";

const musicsModel = new mongoose.Schema({
    title: String,
    author: String,
    url: String
})

export const model = mongoose.model("musics", musicsModel)