var jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model")

const authenticate = async (req, res, next) => {

    console.log(req.headers);
    const Authorization = req.headers.authorization;

    if(!Authorization) {
        return res.send("please pass valida token")
    }

    var decoded = jwt.verify(Authorization, process.env.PRIVATE_TOKEN);

    const user = await UserModel.findById(decoded.id);

    if(!user) {
        return res.send("token not valid")
    }
    
    next();
}

module.exports = authenticate