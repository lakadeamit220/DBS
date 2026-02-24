const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is alive' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});