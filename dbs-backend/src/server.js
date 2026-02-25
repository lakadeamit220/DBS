// src/server.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();  // Load .env file

const app = express();

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Backend is alive (ES6 + dotenv)',
        portUsed: process.env.PORT || 5000,
        env: process.env.NODE_ENV || 'development'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});