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

const hideDone = false;
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
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraBodyContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  )
}
export default App;