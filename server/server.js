import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import comment from './routes/comment.js';
import article from './routes/article.js';

dotenv.config();

const app = express();
const port = 49160;

app.use(cors());
app.use(express.json());

app.use('/comment', comment);
app.use('/article', article);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});