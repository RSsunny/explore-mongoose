const service = require("../../../models/service");
const bcryptjs = require("bcrypt");
const createOne = async (req, res) => {
  try {
    const reqBody = await req?.body;
    const { name, email, phone, password } = reqBody;
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const data = new service({
      name,
      email,
      phone,
      password: hashPassword,
    });
    const result = await data.save();
    res
      .status(201)
      .json({ message: "Service instance created successfully", data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = createOne;
