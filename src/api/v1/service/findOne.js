const service = require("../../../models/service");

const findOne = async (req, res) => {
  try {
    const data = await service.find({ _id: req?.params?.id });
    res
      .status(200)
      .json({ message: "Service instances retrieved successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = findOne;

// const user = req?.user;
// if (user.email !== "hasib@gmail.com") {
//   return res.status(503).json({
//     message: "unauthorizes access",
//   });
// }
// console.log(user?.email);
