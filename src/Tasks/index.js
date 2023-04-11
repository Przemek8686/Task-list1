import { List, Item, Button } from "./styled";

 const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item
      key={task.id} 
      hidden={task.done && hideDone}
      >
        <Button onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </Button>
        <div className={`task__content ${task.done ? "task__content--done" : ""}`}>
                    {task.content} </div>

        <Button remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </List>
);
export default Tasks;