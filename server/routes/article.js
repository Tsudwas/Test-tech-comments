import express from 'express';

import { getArticle } from '../usecases/article.js';

const router = express.Router();

router.get('/:articleId', getArticle);

export default router;