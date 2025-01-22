const MilkRecords = require("../Schemas/milkSchema")


// Add a new Milk Record in the database
exports.addMilkRecord = async (req, resp) => {
    let milkRecords = new MilkRecords(req.body);
    let result = await milkRecords.save();
    resp.send(result)
};


exports.getMilkRecords = async(req, resp) => {
    let milkEntryList = await MilkRecords.find();
    if (milkEntryList.length > 0) {
        resp.send(milkEntryList)
      }
}