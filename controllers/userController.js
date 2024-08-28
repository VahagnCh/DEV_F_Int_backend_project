// The controllers contain the business logic of the application.
// They are responsible for validating data, handling errors, and resolving promises.

// Import the model, in this case.

const UserModel = require('../models/users');

// CREATE
const createUser = (req, res) => {
  UserModel.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// READ - ALL
const findAllUsers = (req, res) => {
  UserModel.getAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// READ - BY ID
const findOneUser = (req, res) => {
  UserModel.getById(req.params.id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// UPDATE
const updateUser = (req, res) => {
  UserModel.update(req.params.id, req.body)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// DELETE
const deleteUser = (req, res) => {
  UserModel.remove(req.params.id)
    .then((deletedUser) => {
      if (deletedUser) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

module.exports = {
  createUser,
  findAllUsers,
  findOneUser,
  updateUser,
  deleteUser,
};