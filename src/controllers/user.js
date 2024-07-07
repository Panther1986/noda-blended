import {
  loginUser,
  findUserByEmail,
  createUser,
  updateUserWithToken,
} from '../services/user.js';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

export const registerUserController = async (req, res) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);
  if (user) throw createHttpError(409, 'Email in use');

  const newUser = await createUser(req.body);
  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
    token: newUser.token,
  });
};

export const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) throw createHttpError(401, 'Wrong credentials');

  const isCorrect = await bcrypt.compare(password, user.password);
  if (!isCorrect) {
    throw createHttpError(401, 'Wrong credentials');
  }
  const updatedUser = await updateUserWithToken(user._id);

  res.status(201).json({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
    },
    token: updatedUser.token,
  });
};
