import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  // Objekt istället för strängar för att hantera ID och status
  const [todos, setTodos] = useState([
    { id: 1, text: "Göra css i appen", completed: false },
    { id: 2, text: "Göra komponenterna", completed: true },
    { id: 3, text: "Spela in redovisning", completed: false },
  ]);

  // Lägg till ny task när todoform skickar text
  function handleAddTodo(text) {
    // Skapa nytt objekt med unikt ID baserat på skap tiden
    const newTodo = {
      id: Date.now(),
      text: text,
      // Ser till så default state på nya tasks är false
      completed: false
    };

    setTodos([...todos, newTodo]);
  }

  // Ändra status på en uppgift klar/inte klar
  function handleToggleTodo(id) {
    const uppdaterade = todos.map(function (todo)) {
      if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

}
}