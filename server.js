import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from "url";
const port = 3000;

import { runGetStarted } from './public/index.js';

// Create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    runGetStarted();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static('public'));