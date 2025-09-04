const express = require('express');
const path = require('path');
const app = express();

// Cấu hình giống Poki
app.use((req, res, next) => {
    // Xử lý file Unity
    if (req.url.endsWith('.br')) {
        res.setHeader('Content-Encoding', 'br');
        res.setHeader('Content-Type', 'application/wasm');
    } else if (req.url.endsWith('.gz')) {
        res.setHeader('Content-Encoding', 'gzip');
    } else if (req.url.endsWith('.wasm')) {
        res.setHeader('Content-Type', 'application/wasm');
    }
    next();
});

// Serve game files
app.use(express.static('.'));

const PORT = 8080;
app.listen(PORT, () => {
    console.log('====================================');
    console.log('Game Server is running');
    console.log('Open browser and run: http://localhost:8080');
    console.log('Press Ctrl+C to turn off server');
    console.log('====================================');
});