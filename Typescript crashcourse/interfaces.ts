function showTodo(todo:{title:string,text:string}){
    console.log(todo.title+": "+todo.text);
}

let myTodo = {title: 'Trash' , text : 'Take Out trash'}

showTodo(myTodo);


interface Todo{
    title: string,
    text: string
}

function showTodos(todo: Todo){
    console.log(todo.title+": "+todo.text);
}

let myTodos = {title: 'Trash' , text : 'Take Out trash'}

showTodo(myTodo);