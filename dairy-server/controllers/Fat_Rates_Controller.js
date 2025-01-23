const FatRate = require("../Schemas/Fat_Rates_Schema")


// Add or update Fat Rate in the database
exports.addFatRates = async (req, res) => {
  const { fat, rate } = req.body;

  try {
    const existingFatRate = await FatRate.findOne({ fat });
    if (existingFatRate) {
      existingFatRate.rate = rate;
      await existingFatRate.save();
      return res.status(200).json(existingFatRate);
    }

    const newFatRate = new FatRate({ fat, rate });
    await newFatRate.save();
    res.status(201).json(newFatRate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.getFatRates = async (req, res) => {
  try {
    const fatRates = await FatRate.find({});
    res.status(200).json(fatRates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
