const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://joaocastro125:mongo@cluster0.smsyg.mongodb.net/users')
const users = mongoose.model('users',{name:String});

console.log("servidor carregado")

module.exports = users;

