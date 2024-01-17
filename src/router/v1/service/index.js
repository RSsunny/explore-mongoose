const {
  createOne,
  findMany,
  createMany,
  updateOne,
  findOne,
  deletedata,
} = require("../../../api/v1/service");
const verifyToken = require("../../../middleware/verifyToken");

const router = require("express").Router();

router.get("/user/:id", verifyToken, findOne);
router.get("/user", findMany);
router.post("/user", createOne);
router.post("/user/many", createMany);
router.put("/user/:id", updateOne);
router.delete("/user/:id", deletedata);

module.exports = router;
