const express = require("express");
const app = express();

const services = require("../services");

app.get("/users", services.getAllUsers);
app.get("/user/:id", services.getUserById);
app.post("/user", services.createUser);
app.put("/user/:id", services.updateUser);
app.delete("/user/:id", services.deleteUser);

module.exports = app;