// const User = require('../app/models/user')
// const bcrypt = require('bcrypt')
//
// const seedUser = function () {
//   User.deleteOne({ email: 'f@f' })
//     .then(() => bcrypt.hash('password', 10))
//     .then((hash) => User.create([{ email: 'f@f', hashedPassword: hash, admin: true, username: 'faith' }]))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }
//
// module.exports = seedUser
