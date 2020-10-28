import express from 'express';

const router = express.Router();

router.get('/episodes/:id', (req, res) => {
    res.send('Return episodes');
});

router.post('/episodes', (req, res) => {
    res.send('Like episode');
});

router.delete('/episodes', (req, res) => {
    res.send('Remove episode');
});

export default router;