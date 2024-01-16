const service = require("../../../models/service");

const createOne = async (req, res) => {
  try {
    // Create a new instance of the service model with data from the request body
    const data = new service(req.body);
    console.log(data);

    // Save the new instance to the database
    await data.save();

    // Send a success response
    res
      .status(201)
      .json({ message: "Service instance created successfully", data });
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createOne;
