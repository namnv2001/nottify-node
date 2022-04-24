const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./src/routes/User')
const authRouter = require('./src/routes/auth')
const zingRouter = require('./src/routes/Zing')

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to database!'))
  .catch((err) => console.log(err))

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/zing', zingRouter)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port 5000')
})
