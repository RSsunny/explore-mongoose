const service = require("../../../models/service");

const deletedata = async (req, res) => {
  try {
    await service.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "delete data successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deletedata;
