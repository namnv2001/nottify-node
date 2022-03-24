<<<<<<< Updated upstream:src/routes/auth/index.js
const User = require('../../models/User')
const CryptoJS = require('crypto-js')
const router = require('express').Router()
const jwt = require('jsonwebtoken')
=======
const User = require("../../models/User");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
>>>>>>> Stashed changes:routes/auth/index.js

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

//LOGIN
<<<<<<< Updated upstream:src/routes/auth/index.js
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    })
    console.log(user)
    !user && res.status(401).json('Wrong username')
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC,
    )
=======
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(401).json("Wrong username");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
>>>>>>> Stashed changes:routes/auth/index.js

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    originalPassword !== req.body.password &&
<<<<<<< Updated upstream:src/routes/auth/index.js
      res.status(401).json('Wrong password')
=======
      res.status(401).json("Wrong password");
>>>>>>> Stashed changes:routes/auth/index.js

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
<<<<<<< Updated upstream:src/routes/auth/index.js
      { expiresIn: '3d' },
    )
    const { password, ...others } = user._doc
    res.status(200).json({ ...others, accessToken })
  } catch (err) {
    res.status(500).json(err)
=======
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
>>>>>>> Stashed changes:routes/auth/index.js
  }
});

module.exports = router;
