const { Post } = require('../models');

const postdata = [
  {
    title: 'Title1',
    contents: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit1.',
    user_id: 1
  },
  {
    title: 'Title2',
    contents: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit2.',
    user_id: 2
  },
  {
    title: 'Title3',
    contents: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit3.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
