import {Todo} from '../model/todo'

class TodoController {
    private todos: Todo[] = []


    getTodos():Todo[] {
        console.log(this.todos);
        return this.todos
    }

    addTodo(title:string):void {
        const newTodo = new Todo(title)
        this.todos.push(newTodo)
    }

    markCompleted(id:number): void{
        const todo = this.todos.find(t => t.id === id)
        if(todo){
            todo.completed = true
        }
    }

    deleteTodo(id:number):void{
        this.todos = this.todos.filter(t => t.id !== id)
    }
}


export const todoController = new TodoController()


