import "./style.css";
const Section = ({ title, body, extraBodyContent }) => (
  <section className="section">
    <header className="section__lowerHeader">
      <h2 className="section__title">{title}</h2>
      {extraBodyContent}
    </header>
    {body}
  </section>
);
export default Section;