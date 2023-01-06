import express from 'express';

import apiRouters from './modules/index.js';

const router = express.Router();

router.use('/api', apiRouters);

export default router;