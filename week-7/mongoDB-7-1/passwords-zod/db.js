// Schema => Structure of the Database how the data is stored in the database
// Model => Interface to interact with the database
// CRUD => Create, Read, Update, Delete

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: String, 
    password: String,
    name: String
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
});

const userModel = mongoose.model('User', User);
const todoModel = mongoose.model('Todo', Todo);

module.exports = {
    userModel,
    todoModel
}  