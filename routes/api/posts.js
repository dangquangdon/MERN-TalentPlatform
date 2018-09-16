const express = require("express");

const router = express.Router();

// @route GET api/posts/test
router.get("/test", (req, res) => {
  res.json({
    message: "Posts works !"
  });
});
//@desc Test post route

//@access Public

module.exports = router;
