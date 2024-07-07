import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  {
    versionKey: false,
  },
);

export const UserCollection = model('user', userSchema);

// Створіть модель користувача User з такими полями:
// name - string, required
// email - string, email, unique, required
// password - string, required
// Створіть модель сесії Session з такими полями:
// userId - string, required
// accessToken - string, required
// refreshToken - string, required
// accessTokenValidUntil - Date, required
// refreshTokenValidUntil - Date, required
