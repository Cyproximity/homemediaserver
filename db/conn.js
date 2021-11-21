const mongoose = require("mongoose")

module.exports = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI)
    return db;
  } catch (e) {
    console.log(e)
  }
}
