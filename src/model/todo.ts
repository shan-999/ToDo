export class Todo {
    private static idCounter = 1

    public id : number;
    public title : string;
    public completed : boolean;

    constructor (title : string){
        this.id = Todo.idCounter++
        this.title = title
        this.completed = false
    }
}