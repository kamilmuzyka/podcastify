import express from 'express';
import { addEpisode, removeEpisode, findEpisodes } from '../controllers/user.js';

const router = express.Router();

router.post('/episodes', addEpisode);

router.delete('/episodes', removeEpisode);

router.get('/episodes/:id', findEpisodes);

export default router;