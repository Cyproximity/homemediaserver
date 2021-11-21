const express = require("express")
const router = express.Router()

// api/v1/
router.get("/", (req, res) => {
  res.json({ path: req.originalUrl, success: true })
})

module.exports = router;
