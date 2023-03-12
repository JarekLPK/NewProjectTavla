import data from "../mocks/data.json";
import Column from "./columns";
import BoardContext from "./context";
import Header from "./header";
import styles from "./index.module.scss";
import Newtask from "./new-task";
import {useState, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import {firestore} from "../firebase_config/firebase.js";

const Board = () => {
    const [isNewTaskVisible, setIsNewTaskVisible] = useState(false);


    return (
        <div className={styles["board-container"]}>
            <Header />
            <BoardContext >
                <Column />
                {isNewTaskVisible && <Newtask onClick ={setIsNewTaskVisible}/>}
            </BoardContext>
            <button onClick={() => setIsNewTaskVisible(true)}>New task</button>
        </div>
    );
};

export default Board;