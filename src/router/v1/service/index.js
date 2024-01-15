const service = require("../../../models/service");

const router = require("express").Router();

router.post("/user", (req, res) => {
  const data = new service(req.body);
  console.log(data);
  data.save((err) => {
    if (err) {
      res.status(500).json({
        error: "Data not saved",
      });
    } else {
      res.status(200).json({
        message: "Data added successfully",
      });
    }
  });
});

module.exports = router;
