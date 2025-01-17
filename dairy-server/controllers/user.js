const user = require("../Schemas/Users")


// Create a new user in the database
exports.registerUser = async (req, resp) => {
    let userData = new user(req.body)
    let result = await userData.save();
    result = result.toObject();
    delete result.password
    resp.send(result)
  };

