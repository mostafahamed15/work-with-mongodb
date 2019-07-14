require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5d19f79b6696ea3b54f61b89', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e)=> {
    console.log(e)
})