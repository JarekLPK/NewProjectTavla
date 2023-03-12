import data from "../mocks/data.json";
import Column from "./columns";
import BoardContext from "./context";
import Header from "./header";
import styles from "./index.module.scss";
import Newtask from "./new-task";
import {useState} from "react";

const Board = () => {
    const [isNewTaskVisible, setIsNewTaskVisible] = useState(false);
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
                {isNewTaskVisible && <Newtask onClick ={setIsNewTaskVisible}/>}
            </BoardContext>
            <button onClick={() => setIsNewTaskVisible(true)}>New task</button>
        </div>
    );
};

export default Board;