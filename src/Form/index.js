import "./style.css";
const Form = () => (
    <form className="form">
          <input className="form__input" placeholder="Wpisz nowe zadanie" autofocus />
          <button className="form__button">Dodaj zadanie</button>
        </form>
);
export default Form;