const User = require("../model/UserModel")

const getUsers = () => {
    return User.find()

}

const getUser = (id) => {
    return User.findById(id)

}

const createUser = (user) => {
    return User.create(user)

}

const updateUsers = (id, users) => {
    return User.findByIdAndUpdate(id, users, { new: true })

}

const deleteUser = (id) => {
    return User.findByIdAndDelete(id)

}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUsers,
    deleteUser
}