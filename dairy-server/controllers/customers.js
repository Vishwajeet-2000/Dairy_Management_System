const Customer = require("../Schemas/customers")


// Add a new customer in the database
exports.addCustomer = async (req, resp) => {
    let customer = new Customer(req.body);
    let result = await customer.save();
    resp.send(result)
};


// Get all customers from the database
exports.getCustomers = async (req, resp) => {
    let customers = await Customer.find();
    if (customers.length > 0) {
      resp.send(customers)
    }
};

