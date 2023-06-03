const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {//! same issue you got, consider this as a subdomain so don't add the whole url
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

// module.exports = auth;
module.exports = router