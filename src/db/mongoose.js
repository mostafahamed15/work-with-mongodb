const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be positive!")
            }
        }
    }
})

const me = new User ({
    name: "  Mostafa  ",
    email: "  FF@GG.COM  "
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!',error)
})

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        validate (value) {
            if (typeof value !== Boolean) {
                throw new Error('Value must be boolean true or false!')
            }
        }
    }
})

// const task = new Tasks({
//     description: "The first task",
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!',error)
// })