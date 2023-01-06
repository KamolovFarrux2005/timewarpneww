import mongoose from "mongoose";

const levelsModel = new mongoose.Schema({
    id: Number,
    title: String,
    status: String
})

export const model = mongoose.model("levels", levelsModel)