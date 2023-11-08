'use strict';
let Models = require('../models'); //matches index.js
const userService = require('../service/userService');
const getUsers = async (res) => {
  //finds all users
  try {
    const users = await userService.getUsers();
    res.send({ result: 200, data: users });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

const createUser = async (data, res) => {
  try {
    const response = await userService.createUser(data);
    res.send({ result: 200, data: response });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};
const updateUser = (req, res) => {
  //updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  //deletes the user matching the ID from the param
  Models.User.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
