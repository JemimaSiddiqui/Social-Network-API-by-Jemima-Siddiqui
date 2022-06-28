const router = require('express').Router();

// ALL of the API routes 
const apiRoutes = require('./api');

// API routes 
router.use('/api', apiRoutes);

// 404 Status error message
router.use((req, res) => {
    res.status(404).send('<h1>404 Error....</h1>');
  });

module.exports = router;