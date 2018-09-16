const express = require("express");

const router = express.Router();

// @route GET api/profile/test
router.get("/test", (req, res) => {
  res.json({
    message: "Profile works !"
  });
});
//@desc Test profile route

//@access Public

module.exports = router;
