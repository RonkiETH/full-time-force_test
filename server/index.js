import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/commits', async (req, res) => {
    try {
        const response = await axios.get(process.env.API_URL, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            }
        });

        const commits = response.data;
        res.json({ commits });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});

