import {
  loginUser,
  registerUser,
  findUserByEmail,
  createUser,
} from '../services/user.js';
import createHttpError from 'http-errors';

export const registerUserController = async (req, res) => {
  const { email } = req.body;
  const user = await findUserByEmail.findOne(email);
  if (user) throw createHttpError(409, 'Email in use');

  const newUser = createUser(req.body);
};

export const loginUserController = async (req, res) => {};
