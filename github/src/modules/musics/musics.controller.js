import musicsService from "./musics.service.js"
import Cloudinary from 'cloudinary'

const cloudinary = Cloudinary.v2

const GET_ALL = async (req, res) => {
    try {

        const musics = await musicsService.findAllMusics()

        const data = musics.map((music) => {
            return { id: music._id, title: music.title, author: music.author, url: music.url }
        })

        res.status(200).json({
            message: "All musics",
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
        const { title, author } = req.body
        const file = req.files.file;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
            folder: "musics"
        })
        if (!(title || author || file)) {
            throw new Error("Please enter all keys!")
        }

        const data = await musicsService.createMusic({
            title: req.body.title,
            author: req.body.author,
            url: result.url
        })

        res.status(200).json({
            message: "Music created!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const DELETE_MUSIC = async (req, res) => {
    try {
        const { _id } = req.params

        if (!_id) {
            throw new Error("Please enter all keys!")
        }

        const data = await musicsService.deleteMusic({
            _id: _id
        })

        if (!data) {
            throw new Error("Music not deleted!")
        }

        res.status(200).json({
            message: "Music created!",
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
    DELETE_MUSIC,
}