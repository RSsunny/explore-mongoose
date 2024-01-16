const service = require("../../../models/service");

const updateOne = async (req, res) => {
  try {
    const result = await service.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Service update successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateOne;
