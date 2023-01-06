import express from "express"

import controller from './videos.controller.js';

const router = express.Router()

router.get('/', controller.GET_ALL);
router.get('/details', controller.GET_ALL_DETAILS);
router.get('/active', controller.GET_ALL_ACTIVE);
router.get('/blocked', controller.GET_ALL_BLOCKED);
router.post('/', controller.CREATE_ONE);
router.put('/', controller.CHANGE_STATUS);
router.delete('/:_id', controller.DELETE_VIDEO);


export default router