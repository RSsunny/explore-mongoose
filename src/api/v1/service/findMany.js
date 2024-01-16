const service = require("../../../models/service");

const findMany = async (req, res) => {
  try {
    const data = await service
      .find({ phone: "01755766682" })
      .select({ _id: 0, name: 0 })
      .limit(2);
    res
      .status(200)
      .json({ message: "Service instances retrieved successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = findMany;
