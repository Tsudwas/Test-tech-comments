import express from 'express';

import {
  getAllComments,
  getMediaComments,
  replyToComment,
  postComment,
  rateComment,
  deleteComment
} from '../usecases/comment.js';

const router = express.Router();

router.get('/comments', getAllComments);
router.get('/:mediaId/', getMediaComments);
router.post('/:mediaId/', postComment);
router.put('/:mediaId/', rateComment);
router.put('/:mediaId/reply', replyToComment);
router.delete('/:commentId/', deleteComment);

export default router;