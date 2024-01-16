const service = require("../../../models/service");

const findMany = async (req, res) => {
  try {
    const data = await service.find();
    res
      .status(200)
      .json({ message: "Service instances retrieved successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = findMany;
