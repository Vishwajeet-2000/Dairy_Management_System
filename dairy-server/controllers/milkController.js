const MilkRecords = require("../Schemas/milkSchema")


// Add a new Milk Record in the database
exports.addMilkRecord = async (req, resp) => {
    let milkRecords = new MilkRecords(req.body);
    let result = await milkRecords.save();
    // resp.send(result)
    resp.send("I am working Bruh")
};