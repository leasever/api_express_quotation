import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passwordHash = await encrypt(password);
  const registerNewUser = UserModel.create({
    email,
    password: passwordHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "NOT_FOUND_USER";
  const passwordHash = user.password;
  const isCorrect = await verify(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";
  const token = generateToken(user.email);
  const data = {
    token,
    user,
  };

  return data;
};

export { loginUser, registerNewUser };
