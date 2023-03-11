import "./style.css";
const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__task ${task.done && hideDone ?
                    " list__task--hidden" : ""
                    }`}
            > <button
                className="tasks__button tasks__button--toggleDone"
                onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`list__text ${task.done ? "list__text--done" : ""}`}>
                    {task.id} - {task.content}
                </span>
                <button
                    className="tasks__button  tasks__button--remove"
                    onClick={() => removeTask(task.id)}>🗑</button>

            </li>
        ))}
    </ul>
);
export default Tasks;