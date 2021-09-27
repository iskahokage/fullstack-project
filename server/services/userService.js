const { User } = require("./../models/model.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const TokenService = require("./tokenService.js");
const MailService = require("./mailService.js");

class UserService {
  static registration = async (email, password, role) => {
    const oldUser = await User.findOne({ where: { email } });
    if (oldUser) {
      throw ErrorHandler.BadRequest("User with this email already registered!");
    }
    const hashedPassword = await bcrypt.hash(password, 3);

    const activationLink = uuidv4();

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      activationLink,
    });

    await MailService.sendActivation(
      email,`${process.env.API}/api/v1/activate/${activationLink}`
    );

    const tokens = TokenService.generateTokens({
      id: user.id,
      email,
      role: user.role,
    });

    return {
      ...tokens,
      user: {
        email,
        id: user.id,
        role: user.role,
      },
    };
  };

  static login = async (email, password) => {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw ErrorHandler.BadRequest("Wrong email or password");
      }

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        throw ErrorHandler.BadRequest("Wrong email or password");
      }
      const tokens = TokenService.generateTokens({
        id: user.id,
        email,
        role: user.role,
      });
      return {
        ...tokens,
        user: {
          email,
          id: user.id,
          role: user.role,
        },
      };
    } catch (error) {
      next(error);
    }
  };

  static getAll = async () => {
    return await User.findAll({ attributes: ["email", "role", "id"] });
  };
  static activate = async(link)=>{
    const user = await User.findOne({where: {activationLink: link}})
    if(!user){
      throw ErrorHandler.BadRequest('Activation is incorrect');
    }
    user.isActivated = true;
    await user.save();
  }
}

module.exports = UserService;
