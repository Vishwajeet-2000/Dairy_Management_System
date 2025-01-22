const FatRate = require("../Schemas/Fat_Rates_Schema")


// Add a new Fat Rate in the database
exports.addFatRates = async (req, res) => {
    const { fat, rate } = req.body;
    try {
      const newFatRate = new FatRate({ fat, rate });
      await newFatRate.save();
      res.status(201).json(newFatRate);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


