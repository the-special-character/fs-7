var jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model");


class AuthController {
  register = async  (req, res)  => {
    try {
      const User = new UserModel(req.body);
      await User.save();
      
      res.send("register success");
    } catch (error) {
      console.log(error);
      res.send("register failed");
    }
  }

  login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user) {
            throw new Error("username not exist")
        }
        const match = await user.comparePassword(password);
        if(!match) {
            throw new Error("password is not valid")
        }
        var accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.PRIVATE_TOKEN);
        res.send({accessToken,user});
    } catch (error) {
        res.send(error.message)
    }
  }
}

module.exports = AuthController;
