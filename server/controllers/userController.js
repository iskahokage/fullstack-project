const UserService = require("./../services/userService.js");

class UserController {
  static registration = async (req, res, next) => {
    try {
      const { email, password, role } = req.body;

      const userData = await UserService.registration(email, password, role);

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  };

  static login = async( req,res,next) =>{
    try {
      const {email, password} = req.body;
      const userData = await UserService.login(email, password)
      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }

  static getAll = async (req, res, next) => {
    try {
      const users = await UserService.getAll();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  };

  static activate = async(req,res,next) =>{
    try {
      const {link} = req.params;
      await UserService.activate(link)
      return res.redirect('http://google.com')
    } catch (error) {
      next(error)
    }
  }
  static delete = async(req,res,next) =>{
    try {
      const {id} = req.params;
      await UserService.delete(id)
      return res.json({msg:"profile deleted"})
    } catch (error) {
      next(error)
    }
  }
  static getOne = async(req,res,next) =>{
    try {
      const {id} = req.params;
      const user = await UserService.getOne(id)
      return res.json(user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController;
