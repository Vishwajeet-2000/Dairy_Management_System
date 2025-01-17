const user = require("../Schemas/User")


// Create a new user in the database
exports.registerUser = async (req, resp) => {
    let userData = new User(req.body)
    let result = await userData.save();
    result = result.toObject();
    delete result.password
    resp.send(result)
  };

