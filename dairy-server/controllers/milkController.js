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

// Delete a post from the database
exports.deleteMilkRecord = async (req, resp) => {
    const { id } = req.params; 
    await MilkRecords.findByIdAndDelete(id); 
    resp.status(204).send();
  };


  exports.updateMilkRecord = async (req, resp) => {
    let result = await MilkRecords.updateOne(
      { _id: req.params.id },
      {
        $set: req.body
      }
    )
    resp.send(result)
  };