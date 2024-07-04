import getData from "./getData.js";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 4000;

app.get('/', async (req, res) => {
    try {
        const data = await getData();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
