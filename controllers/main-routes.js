const router = require('express').Router();
const path = require('path');

// This is the 'get' route 
// GET initial page (this is our login page and sample site page)
router.get("/", async (req, res) => {

  try {

    // Pass serialized data and session flag into template
    res.render("all", {

    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// -------------------------------------------------------------

module.exports = router;
