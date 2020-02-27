const User = require('../models/user');

async function getAllUsers(request, response) {
  try {
    const users = await User.list();
    response.json(users);
  }
  catch (err) {
    throw new Error(err);
  }
}
async function createUser(request, response) {
  const user = new User(request.body);
  try {
    const newuser = await user.save();
    response.json(newuser);
  }
g    throw new Error(err);
  }
}
async function getUserById(request, response) {
  try {
    const user = await User.get(request.params.id);
    response.json(user);
  }
  catch (err) {
    throw new Error(err);
  }
}
async function updateUser(request, response) {
  try {
    const user = await User.update(request.params.id, request.body);
    response.json(user);
  }
  catch (err) {
    throw new Error(err);
  }
}
async function deleteUser(request, response) {
  try {
    const user = await User.delete(request.params.id);
    response.json(user);
  }
catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
