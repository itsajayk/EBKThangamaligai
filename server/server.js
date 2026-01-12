// server/server.js
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(__dirname, 'rates.json');
const ADMIN_PASS = process.env.ADMIN_PASS || 'admin123'; // change in .env

// Ensure file exists
if (!fs.existsSync(DATA_PATH)) {
  fs.writeFileSync(DATA_PATH, JSON.stringify({
    visible: true,
    message: "Today's Gold Rates",
    rates: [
      { label: "22K (1g)", value: "5500" },
      { label: "24K (1g)", value: "6000" }
    ],
    updatedAt: new Date().toISOString()
  }, null, 2));
}

function readData() {
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

// Public endpoint
app.get('/api/rates', (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// Protected update endpoint
app.post('/api/rates', (req, res) => {
  const pass = req.headers['x-admin-pass'] || req.body.adminPass;
  if (pass !== ADMIN_PASS) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const payload = req.body;
  // Validate minimal shape
  if (!payload || typeof payload !== 'object') {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const current = readData();
  const next = {
    ...current,
    ...payload,
    updatedAt: new Date().toISOString()
  };

  try {
    writeData(next);
    res.json({ ok: true, data: next });
  } catch (e) {
    res.status(500).json({ error: 'Failed to write data' });
  }
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Rates API listening on ${PORT}`));
