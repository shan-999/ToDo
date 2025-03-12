import express from 'express'
import { todoController } from '../controller/todo_controller'


const router = express.Router()

router.get('/',(req,res) => {    
    res.render('index',{todos : todoController.getTodos()})
})


router.post('/add',(req,res) => {
    const {title} = req.body
    if(title){
        todoController.addTodo(title)
    }
    res.redirect('/')
})


router.post('/complete/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    todoController.markCompleted(id)
    res.redirect('/')
})


router.post('/delete/:id',(req,res) => {
    const id = parseInt(req.params.id);
    todoController.deleteTodo(id)
    res.redirect('/')
})


export default router;