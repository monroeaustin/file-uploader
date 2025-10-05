const express = require('express')
const app = express()
const port = 3000
// const passport = require('./config/auth')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('./home')
})

app.get('/login', (req, res) => {
  res.render('./login')
})

// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/glorriboi/dashboard',
//   failureRedirect: '/login'
// }));
app.get('/signup', (req, res) => {
  res.render('./signup')
})
app.get('/:profileid/dashboard', (req, res) => {
  res.render('./dashboard')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

