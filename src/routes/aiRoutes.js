import getAIAnswer from '../controllers/aiController.js';

import express from 'express';

const router = express.Router();

// router.route("/fetchAIAnswer")
//         .get(getAIAnswer);


router.get("/fetchAIAnswer", getAIAnswer);

export default router;