const mongoose = require("mongoose")

module.exports = async (models) => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI)
    db.models = models
    return db;
  } catch (e) {
    console.log(e)
  }
}
