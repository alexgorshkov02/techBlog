const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');

// get all posts for dashboard
router.get('/', (req, res) => {
    console.log(req.session);
    console.log('======================');
    Post.findAll({
      where: {
        //Temporary until the sessions are implemented 
        user_id: 1
      },
      attributes: [
        'id',
        'title',
        'contents',
        'created_at'
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
