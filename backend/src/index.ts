import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { json } from 'express';
import userRoutes from './routes/userRoutes';
import menuRoutes from './routes/menuRoutes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(json());

// Modular routes
app.use('/api/auth', userRoutes);
app.use('/api/menu', menuRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});