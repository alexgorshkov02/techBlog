const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "testuser1",
    password: "password123",
  },
  {
    username: "testuser2",
    password: "password123",
  },
  {
    username: "testuser3",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
