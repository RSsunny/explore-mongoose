const {
  createOne,
  findMany,
  createMany,
  updateOne,
  findOne,
  deletedata,
} = require("../../../api/v1/service");

const router = require("express").Router();

router.get("/user/:id", findOne);
router.get("/user", findMany);
router.post("/user", createOne);
router.post("/user/many", createMany);
router.put("/user/:id", updateOne);
router.delete("/user/:id", deletedata);

module.exports = router;
