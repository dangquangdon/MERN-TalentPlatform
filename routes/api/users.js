const express = require("express");

const router = express.Router();

// @route GET api/users/test
router.get("/test", (req, res) => {
  res.json({
    message: "Users works !"
  });
});
//@desc Test user route

//@access Public

module.exports = router;
