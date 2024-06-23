import {loginUser, registerUser} from "../services/user.js"

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({

    data: {email:user.email, name: user.name},
  })
};

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })

  res.status(200).json({
    data: {
      accessToken: session.accessToken,
    }
  })
};
