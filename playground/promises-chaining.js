require('../src/db/mongoose')
const User = require('../src/models/user')

//Promise chaining

// User.findByIdAndUpdate('5d19f79b6696ea3b54f61b89', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })


//Async await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5d19f79b6696ea3b54f61b89', 2).then((count)=> {
    console.log(count)
}).catch((e)=> {
    console.log(e)
})