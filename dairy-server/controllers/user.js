const User = require("../Schemas/Users")


// Create a new user in the database
exports.registerUser = async (req, resp) => {
    let userData = new User(req.body)
    let result = await userData.save();
    result = result.toObject();
    delete result.password
    resp.send(result)
  };

  // Login API
  exports.loginUser = async (req, resp) => {
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body).select("-password")
      if (user) {
        resp.send(user)
      } else {
        resp.send({ result: 'No user found' })
      }
    } else {
      resp.send({ result: 'No user found' })
    }
  };