const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.route'))


// connect to DB
async function start() {
    try {
        await mongoose.connect('mongodb+srv://arayik:aroaro1907@cluster0.w27i6zt.mongodb.net/?retryWrites=true&w=majority', {
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
