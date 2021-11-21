const express = require("express")
const router = express.Router()

const {pages} = require("../app/controllers")

router.get("/", pages.index)

module.exports = router;
