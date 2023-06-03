import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => ( <
    Container >
    <
    Header title = { "O autorze" }
    />{" "} <
    Section title = "Przemek Krawczynski"
    body = { <
        >
        <
        p > { " " }
        Czesc,
        nazywam sie Przemek Krawczynski.Od ponad 10 lat mieszkam i
        pracuje w Holandii. { " " } <
        /p>{" "} <
        p > { " " }
        Ukonczylem szkole w kierunku Technik Ekonomista oraz Technik Ochrony
        Osob i Mienia,
        ale przez ostatnie lata ukonczylem rowniez kursy
        spawania,
        operatora koparki i wozkow widlowych oraz instruktora
        pilki noznej.Obcnie uczeszczam na kurs online dotyczacy
        programowania. { " " } <
        /p>{" "} <
        p > { " " }
        Interesuje sie { " " } <
        b > sportem,
        polityka,
        czytaniem ksiazek oraz muzyka. < /b>{" "} <
        /p>{" "} <
        />
    }
    />{" "} <
    /Container>
);

export default AuthorPage;