const express = require('express')
const router = express.Router()
// const path = require('path')

router.route('/').get((req, res) => {
  res.status(200).send('Are you happy now?')
})

module.exports = {
  router: router
}
