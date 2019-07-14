require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d21c3f8e47f1c45e44b900c').then((task)=> {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=> {
    console.log(result)
}).catch((e)=> {
    console.log(e)
})