import videoService from "./videos.service.js"

const GET_ALL = async (req, res) => {
    try {

        let data = await videoService.findAllVideos()

        data = data.map((video) => video.id)

        res.status(200).json({
            message: "all videos",
            data
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const GET_ALL_DETAILS = async (req, res) => {
    try {

        let data = await videoService.findAllVideos()

        res.status(200).json({
            message: "all videos",
            data
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const GET_ALL_ACTIVE = async (req, res) => {
    try {

        const data = await videoService.findAllActiveVideos()

        res.status(200).json({
            message: "active videos",
            data,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const GET_ALL_BLOCKED = async (req, res) => {
    try {

        const data = await videoService.findAllBlockedVideos()

        res.status(200).json({
            message: "blocked videos",
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

        const data = await videoService.createBlockedVideo({
            title: req.body.title,
            id: req.body.id,
            status: req.body.status
        })

        res.status(200).json({
            message: "Video created!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};


const CHANGE_STATUS = async (req, res) => {
    try {
        const {status, title} = req.body

        if (!(status === "active" || status === "blocked")) {
            throw new Error("Please enter correct status for video!")
        }

        let inputData
        if(title) {
            inputData = {
                _id: req.body._id,
                status: req.body.status,
                title: req.body?.title
            }
        }else {
            inputData = {
                _id: req.body._id,
                status: req.body.status,
            }
        }

        const data = await videoService.changeStatusVideo(inputData)
        if(!data) {
            throw new Error("Video not changed!")
        }

        res.status(200).json({
            message: "Video created!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const DELETE_VIDEO = async (req, res) => {
    try {
        const {_id} = req.params

        if (!_id) {
            throw new Error("Please enter all keys!")
        }

        const data = await videoService.deleteVideo(_id)

        if(!data) {
            throw new Error("Video not deleted!")
        }

        res.status(200).json({
            message: "Video Deleted!",
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
    GET_ALL_DETAILS,
    CREATE_ONE,
    GET_ALL_ACTIVE,
    GET_ALL_BLOCKED,
    CHANGE_STATUS,
    DELETE_VIDEO
}