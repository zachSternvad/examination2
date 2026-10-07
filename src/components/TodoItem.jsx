export default function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
    return (
        // Lägger till class complete om uppgiften klickas, kanske ändrar till kryssruta sen
        <li className={todo.completed ? "todo-item completed" : "todo-item"}>

            <span onClick={() => onToggleTodo(todo.id)} className="todo-text">
                {todo.text}
            </span>

            <div className="button-group">
                <button onClick={() => onToggleTodo(todo.id)} className="toggle-btn">
                    {todo.compledet ? "Ångra" : "Klar"}
                </button>

                <button onClick={() => onDeleteTodo(todo.id)} className="delete-btn">Ta Bort</button>
            </div>
        </li>
    );
}