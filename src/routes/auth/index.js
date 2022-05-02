const User = require('../../models/User')
const CryptoJS = require('crypto-js')
const router = require('express').Router()
const jwt = require('jsonwebtoken')

// REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC),
  })
  try {
    const user = await User.findOne({ username: req.body.username })
    if (user)
      throw {
        status: 401,
        type: 'username',
        message: 'Username already exists!',
      }
    const userEmail = await User.findOne({ email: req.body.email })
    if (userEmail)
      throw { status: 401, type: 'email', message: 'Email already exists!' }

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    if (error.status === 401) {
      res.status(401).json(error)
    } else res.status(400).json({ message: 'Bad request!' })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    })
    if (!user)
      throw { status: 401, type: 'username', message: 'Wrong username!' }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC,
    )
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    if (originalPassword !== req.body.password)
      throw { status: 401, type: 'password', message: 'Wrong password!' }

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' },
    )
    const { password, ...others } = user._doc
    res.status(200).json({ ...others, accessToken })
  } catch (error) {
    if (error.status === 401) {
      res.status(401).json(error)
    } else res.status(400).json({ message: 'Bad request!' })
  }
})

module.exports = router
