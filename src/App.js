import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "transfer na React", done: false },
  { id: 2, content: "zrobić trening", done: true },
];

const hideDoneTasks = false;
function App() {
  return (
    <Container>
      <Header title="Lista Zadań"/>
      <Section
        title="Dodaj Nowe Zadanie"
        body={<Form />}
      />
      <Section
        title="Lista Zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraBodyContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  )
}
export default App;