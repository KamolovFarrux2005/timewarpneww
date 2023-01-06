import {model} from "../../models/musics.model.js";

const findAllMusics = async () => {
    const allMusics = await model.find({})
    return allMusics
};

const createMusic = async (data) => {
    const createdMusic = await model.create(data)
    return createdMusic
};

const deleteMusic = async (data) => {
    const deletedMusic = await model.findByIdAndDelete(data._id)
    return deletedMusic
};

export default {
    findAllMusics,
    createMusic,
    deleteMusic
}
