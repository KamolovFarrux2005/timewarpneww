import express from "express"

import controller from './levels.controller.js';

const router = express.Router()

router.get('/', controller.GET_ALL);
router.post('/', controller.CREATE_ONE);
router.delete('/:_id', controller.DELETE_LEVEL);

export default router