import { UserCollection } from '../db/user.js';

import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const findUserByEmail = (email) => UserCollection.findOne({ email });
export const updateUserWithToken = (id) => {
  const userToken = jwt.sign(
    {
      id,
    },
    env('JWT_SECRET'),
  );
  return UserCollection.findByIdAndUpdate(
    id,
    { token: userToken },
    { new: true },
  );
};
export const createUser = async (userData) => {
  const cryptPassword = await bcrypt.hash(userData.password, 10);

  const newUser = await UserCollection.create({
    ...userData,
    password: cryptPassword,
  });
  return updateUserWithToken(newUser._id);
};

export const registerUser = async (userData) => {
  // const user = await UserCollection.findOne({ email: userData.email });
  // if (user) throw createHttpError(409, 'Email in use');
  // const cryptPassword = await bcrypt.hash(userData.password, 10);
  // return await UserCollection.create({
  //   ...userData,
  //   password: cryptPassword,
  // });
};

export const loginUser = async (userData) => {
  // const user = await UserCollection.findOne({ email: userData.email });
  // if (!user) {
  //   throw createHttpError(401, 'User not found');
  // }
  // const isCorrect = await bcrypt.compare(userData.password, user.password);
  // if (!isCorrect) {
  //   throw createHttpError(401, 'User not found');
  // }
  // await SessionCollection.deleteOne({ userId: user._id });
  // const accessToken = randomBytes(30).toString('base64');
  // const refreshToken = randomBytes(30).toString('base64');
  // return SessionCollection.create({
  //   userId: user._id,
  //   accessToken,
  //   refreshToken,
  //   accessTokenValidUntil: new Date(Date.now() + 15 * 60 * 1000),
  //   refreshTokenValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  // });
};
