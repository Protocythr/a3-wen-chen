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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/submit-expense', (req, res) => {
    const json = {
        expenseDate: req.body.date,
        expenseName: req.body.expense,
        expenseAmount: req.body.amount,
        expenseCategory: req.body.category,
        expenseDescription: req.body.description
    };

    console.log("Data received on server:", req.body);

    // Send a response back to the client
    res.status(200).json({
        status: "success",
        message: "Data successfully received!",
    });
});

app.get('/', (req, res) => {
    runGetStarted();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static('public'));