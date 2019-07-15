require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d21c3f8e47f1c45e44b900c').then((task)=> {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=> {
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })

//Async await

const deleteTaskAndCount = async (id) => {
    const task = Task.findByIdAndDelete(id)
    const count = Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5d21c3f8e47f1c45e44b900c').then((count)=> {
    console.log(count)
}).catch((e)=> {
    console.log(e)
})