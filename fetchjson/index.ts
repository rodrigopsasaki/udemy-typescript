import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  logTodo(todo);
});

const logTodo = (todo: Todo) => {
  console.log(`
    The Todo with ID: ${todo.id}
    Has a title of: ${todo.title}
    Is it completed? ${todo.completed}
  `);
};
