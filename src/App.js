import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import useTasks from "./useTasks";

const theme = {
  colors: {
    done: {
      display: "hsl(120, 100%, 25%)",
      hover: "hsl(120, 100%, 28%)",
      active: "hsl(120, 100%, 31%)",
    },
    remove: {
      display: "hsl(0, 100%, 50%)",
      hover: "hsl(0, 100%, 62%)",
      active: "hsl(0, 100%, 68%)",
    },
  },
  breakPoints: {
    mobiles: 767,
  },
};

function App() {
  const [hideDone, setHideDone] = useState(
    
  );

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const { tasks, setAllDone, toggleTaskDone, removeTask, addNewTask } =
    useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Header title={"Lista zadań"} />
      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title={"Lista zadań"}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
          />
        }
        buttons={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            disabled={tasks.every(({ done }) => done)}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </ThemeProvider>
  );
}
export default App;
