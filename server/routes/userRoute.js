import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/userController.js';
import userAuth from '../middlewares/userAuth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', logoutUser);

userRouter.get('/profile', userAuth, (req, res) => {
  res.json({
    success: true,
    message: 'You are logged in',
    userId: req.userId,
  });
});

export default userRouter;