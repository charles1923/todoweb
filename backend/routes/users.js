import express from 'express';
import { getUserInfo, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/info', getUserInfo);
router.put('/info', updateUser);

export default router;
