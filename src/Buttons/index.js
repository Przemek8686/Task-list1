import "./style.css";
const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} Ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ Wszystkie
                </button>

            </>
        )}

    </div >
);
export default Buttons;
