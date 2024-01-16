const service = require("../../../models/service");

const createOne = async (req, res) => {
  try {
    const data = new service(req.body);
    console.log(data);
    await data.save();
    res.status(201).json({ message: "Service instance created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createOne;
