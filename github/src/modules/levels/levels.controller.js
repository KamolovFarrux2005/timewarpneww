import levelService from "./levels.service.js"

const GET_ALL = async (req, res) => {
    try {

        const data = await levelService.findAllLevels()

        res.status(200).json({
            message: "All levels",
            data
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const CREATE_ONE = async (req, res) => {
    try {
        const {id, title, status} = req.body

        if (!(id || title || status)) {
            throw new Error("Please enter all keys!")
        }

        if (!(status == "active" || status == "blocked")) {
            throw new Error("Please enter correct status for video!")
        }

        const data = await levelService.createLevel({
            title: req.body.title,
            id: req.body.id,
            status: req.body.status
        })

        res.status(200).json({
            message: "Level created!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const DELETE_LEVEL = async (req, res) => {
    try {
        const {_id} = req.params

        if (!_id) {
            throw new Error("Please enter all keys!")
        }

        const data = await levelService.deleteLevel(_id)

        if(!data) {
            throw new Error("Level not deleted!")
        }

        res.status(200).json({
            message: "Level deleted!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export default {
    GET_ALL,
    CREATE_ONE,
    DELETE_LEVEL
}