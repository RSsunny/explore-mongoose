const service = require("../../../models/service");

const createMany = async (req, res) => {
  try {
    await service.insertMany(req.body);
    res.status(201).json({ message: "Service instance created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createMany;
