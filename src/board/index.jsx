import data from "../mocks/data.json";
import Column from "./columns";
import BoardContext from "./context";
import Header from "./header";
import styles from "./index.module.scss";

const Board = () => {
    const {
        user: {
            id: {
                board: { tasks },
            },
        },
    } = data;

    return (
        <div className={styles["board-container"]}>
            <Header />
            <BoardContext data={tasks}>
                <Column />
            </BoardContext>
        </div>
    );
};

export default Board;