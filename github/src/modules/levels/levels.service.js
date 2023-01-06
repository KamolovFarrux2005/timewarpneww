import {model} from "../../models/levels.model.js";

const findAllLevels = async () => {
    const allVideos = await model.find({})
    return allVideos.map((level) => level.id)
};

const createLevel = async (data) => {
    const createdLevel = await model.create(data)
    return createdLevel
};


const deleteLevel = async (_id) => {
    
    const deletedLevel = await model.findOneAndDelete({id:_id})
    return deletedLevel
};

export default {
    findAllLevels,
    createLevel,
    deleteLevel
}
