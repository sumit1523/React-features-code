import { useEffect, useState } from "react";

const Todos = () => {
  const TODOS_KEY = "notes";

  const localTodo = JSON.parse(localStorage.getItem(TODOS_KEY));

  const [newTodo, setNewTodo] = useState("");
  const [toDos, setTodos] = useState(localTodo || []);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const currentTodo = {
      id: Date.now(),
      title: newTodo,
    };

    if (editingTodo) {
      // Update existing todo
      setTodos(
        toDos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, title: newTodo } : todo
        )
      );
      setEditingTodo(null);
    } else {
      // Add new todo
      setTodos([currentTodo, ...toDos]);
    }
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    const filterTodo = toDos.filter((item) => item.id !== id);
    setTodos(filterTodo);
  };

  const startEdit = (todo) => {
    setEditingTodo(todo);
    setNewTodo(todo.title);
  };

  // Load todos from localStorage on initial render
  useEffect(() => {
    // const storedTodos = localStorage.getItem(TODOS_KEY);
    // storedTodos ? setTodos(JSON.parse(storedTodos)) : setTodos([]);
    try {
      const storedTodos = localStorage.getItem(TODOS_KEY);
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error("Error loading todos from localStorage", error);
    }
  }, []);

  // Save todos to localStorage whenever 'todos' changes
  useEffect(() => {
    try {
      localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    } catch (error) {
      console.error("Error saving todos to localStorage", error);
    }
  }, [toDos]);

  return (
    <div>
      <h1>Todos</h1>
      <input
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target?.value)}
      />
      <button onClick={addTodo}>{editingTodo ? "Update" : "Add"}</button>
      <ul>
        {toDos.map((todo) => (
          <li key={todo?.id} style={{ listStyle: "none" }}>
            {todo?.title}
            <button onClick={() => startEdit(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todos;
