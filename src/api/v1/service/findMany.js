const service = require("../../../models/service");

const findMany = async (req, res) => {
  try {
    const data = await service
      .find({ phone: "01755766682" })
      .select({ name: 0 })
      .limit(10);
    res
      .status(200)
      .json({ message: "Service instances retrieved successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findMany;

// const cursor =await service.find(query,"id, title, des").sort({price : filter.sort==="asc"?1:-1})
