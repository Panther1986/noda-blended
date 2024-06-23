import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper';
import { registerUserSchema } from '../validation/userSchema.js';
import { validateBody } from '../validation/validateBody.js';
import { registerUserController } from '../controllers/user.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);

export default router;
