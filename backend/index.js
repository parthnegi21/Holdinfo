// index.js or app.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cors = require('cors');
const app = express();

// Enable all CORS requests
app.use(cors())

app.get('/data', async (req, res) => {
  try {
    const data = await prisma.data.findMany();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
