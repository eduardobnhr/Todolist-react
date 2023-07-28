import { useState } from 'react';
import Todo from './components/Todo';
import './App.css';
import TodoForm from './components/TodoForm';
import Search from './components/Search';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    { id: 2, text: "Ir para a academia", category: "Pessoal", isCompleted: false },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);


  const [search, setSearch] = useState("");


  const addTodo = (text, category) => {
    const newTodos = [//recebe por spread todos os 'todos' atuais
      ...todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  }

  //função para remover tarefas
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  };
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  };


  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} set={setSearch} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()))
          .map((todo) => (
            <Todo 
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
               />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );

}

export default App
