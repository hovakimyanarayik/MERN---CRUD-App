const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get.port || 5000

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/todo', require('./routes/todo.route'))


// connect to DB
async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: true
        })

        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()
