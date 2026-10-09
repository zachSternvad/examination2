import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Göra klart workshops", completed: false },
  ])
}