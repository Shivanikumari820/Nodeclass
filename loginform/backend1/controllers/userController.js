const UserModel = require("../models/userModel");

const userRegistration = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserModel.create({
    name: name,
    email: email,
    password: password
  });
  res.status(201).json({ msg: "You are Succesfully Registered!" });
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ msg: "Invalid Email!" });
  }

  if (user.password !== password) {
    return res.status(400).json({ msg: "Invalid Password!" });
  }

  // ✅ yaha sahi response bhejna hoga
  res.status(202).json({
    msg: "You are succesfully login!",
    user: {
      name: user.name,
      email: user.email
    }
  });
};

module.exports = {
  userRegistration,
  userLogin
};
