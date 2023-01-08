const { Router } = require('express');
const Todo = require('../models/Todo');
const auth = require('../middleware/auth.middleware');

const router = Router()

router.post('/add', auth,  async (req, res) => {
try {
    const {text, userId} = req.body

    const todo = await new Todo({
        text,
        owner: req.user.userId,
        completed: false,
        important: false
    })

    if(userId !== req.user.userId){
        return res.status(401).json({message: "Unauthorized"})
    }

    await todo.save()

    res.status(201).json(todo)

} catch (e) {
    res.status(500).json({message: "Server Error"});
}
})

router.get('/', auth, async(req, res) => {
    try {
        const todos = await Todo.find({owner: req.user.userId})

        res.json(todos)

    } catch (e) {
        res.status(500).json({message: "Server Error"});
    }
})

router.delete('/delete/:id', auth, async(req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({_id: req.params.id})
        res.json(todo)
    } catch (e) {
        res.status(500).json({message: "Server Error"});
    }
})

module.exports = router