import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header title={"O autorze"} />
        <Section
            title="Marzena Malka"
            body={
                <>
                <p>Czesc, nazywam sie Przemek Krawczynski.Od ponad 10 lat mieszkam i pracuje w Holandii. </p> 
                <p>Dotychczas krztalcilem sie w wielu kierunkach, obecnie uczeszczam na kurs online dotyczacy programowania</p>
                <p>Interesuje sie <b>sportem,polityka, czytaniem ksiazek oraz muzyka</b></p>
                </>
            }
            />
    </Container>
);

export default AuthorPage;