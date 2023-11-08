'use strict';
let Models = require('../models'); //matches index.js

const getUsers = async () => {
  return await Models.User.find({});
};

const createUser = async (data) => {
  return await new Models.User(data).save();
};

module.exports = {
  getUsers,
  createUser,
};
