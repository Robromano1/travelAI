import aiRouter from './routes/aiRoutes.js';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use(aiRouter);

export default app;

/* 
    1. Set up Open AI api config
    2. Set up Supabase config
    3. Use chat completions api and langchain
    4. Create an AI assistant or Agent to plan trips
    5. Use supabase to store trip data
    6. Create vector embeddings to give suggestions in the future based on users past trips and what they like
    7. Create fluid and intuitive UI.
*/