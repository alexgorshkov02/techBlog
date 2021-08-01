const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api/');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.get('/', function (req, res) {
    res.render('homepage');
});

module.exports = router;