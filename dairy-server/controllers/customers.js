const Customer = require("../Schemas/customers")


// Add a new customer in the database
exports.addCustomer = async (req, resp) => {
    let customer = new Customer(req.body);
    let result = await customer.save();
    resp.send(result)
  };