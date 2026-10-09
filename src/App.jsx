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
    const uppdaterade = todos.map(function (todo) {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(uppdaterade);
  }

  // Ta bort task baserat på ID
  function handleRemoveTodo(idToRemove) {
    /* Skapa array istället för att ändra state direkt */
    const kvar = todos.filter(function (todo) {
      return todo.id !== idToRemove;
    });
    setTodos(kvar);
  }

  return (
    <main className="app-container">
      <h1>Min ADHD lista</h1>
      <p>Antal tasks: {todos.length}</p>

      {/* Form hanterar sin egen input och gör ett call till handleAddTodo */}
      <TodoForm onAddTodo={handleAddTodo} />

      <ul>
        {/* Visa en text om inga uppgifter finns */}
        {todos.length == 0 ? (
          <p className="empty-message">Inga tasks kvar!!</p>) : (
          todos.map(function (todo) {
            return (
              <TodoItem key={todo.id} todo={todo} onToggleTodo={handleToggleTodo} onDeleteTodo={handleRemoveTodo} />
            );
          })
        )}
      </ul>
    </main>
  );
}

export default App;