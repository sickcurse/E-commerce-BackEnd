const router = require('express').Router();

// Basic route to test
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

module.exports = router;
