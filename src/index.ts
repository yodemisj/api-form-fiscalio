import express from 'express';
import route from './routes/route';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', route);

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});