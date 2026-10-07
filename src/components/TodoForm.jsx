import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        // Stoppa sidan från att laddas om vid varje update
        e.preventDefault();
        // Förhindra tomma inputs
        if (!text.trim()) return;

        onAddTodo(text);
        // Töm input rutan
        setText("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Lägg till en task..." value={text} onChange={(e) => setText(e.target.value)} />
        </form>
    );
}