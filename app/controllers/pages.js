const models = require("../models")

const index = async (req, res) => {
  // await models.User.create({ username: "test_"+Math.random() * 36 })
  // const users = await models.User.find({})
  return res.render("pages/home")
}

module.exports = {
  index
}
