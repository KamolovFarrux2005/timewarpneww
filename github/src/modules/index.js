import express from 'express';

import VideosRouter from './videos/videos.modules.js';
import MusicsRouter from './musics/musics.modules.js';
import LevelsRouter from './levels/levels.modules.js';

const router = express.Router();

router.use('/videos', VideosRouter);
router.use('/musics', MusicsRouter);
router.use('/levels', LevelsRouter);

export default router