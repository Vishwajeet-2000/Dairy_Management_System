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


// Delete a post from the database
exports.deleteCustomer = async (req, resp) => {
  const { id } = req.params; 
  await Customer.findByIdAndDelete(id); 
  resp.status(204).send();
};


exports.updateCustomer = async (req, resp) => {
  let result = await Customer.updateOne(
    { _id: req.params.id },
    {
      $set: req.body
    }
  )
  resp.send(result)
};

// Update an existing post in the database
// exports.updateCustomer = async (req, resp) => {
//   const { id } = req.params; 
//   const { title, content } = req.body; 
//   const updatedCustomer = await Post.findByIdAndUpdate(id, { title, content }, { new: true }); 
//   resp.status(200).json(updatedCustomer); 
// };

