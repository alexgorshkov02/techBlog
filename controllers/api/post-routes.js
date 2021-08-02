const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    Post.create({
      title: req.body.title,
      contents: req.body.contents,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;
