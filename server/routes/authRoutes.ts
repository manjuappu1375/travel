// server/routes/authRoutes.ts
import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('Login route');
});

router.post('/register', (req, res) => {
  res.send('Register route');
});

export default router;
