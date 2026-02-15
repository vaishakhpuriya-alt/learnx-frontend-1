const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, default: "student" },
    totalXP: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", UserSchema);
