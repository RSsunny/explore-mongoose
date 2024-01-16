const { createOne, findMany } = require("../../../api/v1/service");

const router = require("express").Router();

router.post("/user", createOne);
router.get("/user", findMany);

module.exports = router;
