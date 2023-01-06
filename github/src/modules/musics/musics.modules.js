import express from "express"

import controller from './musics.controller.js';

const router = express.Router()

router.get('/', controller.GET_ALL);
router.post('/', controller.CREATE_ONE);
router.delete('/:_id', controller.DELETE_MUSIC);


export default router