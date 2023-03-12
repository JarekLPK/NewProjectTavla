import React, { useContext } from "react";
import { TASK_STATES } from "../constants";
import { Context } from "../context";
import styles from "./index.module.scss";
import Tasks from "./tasks/index.jsx";

const Column = () => {
    const { boardTasks } = useContext(Context);

    const sortedTasks = TASK_STATES.map((state) =>
        boardTasks?.filter((task) => state.toLowerCase() === task.state)
    );

    return (
        <ul className={styles["columns"]}>
            {sortedTasks.map((columnData, index) => (
                <li key={index} className={styles["single-column"]}>
                    <Tasks tasks={columnData} />
                </li>
            ))}
        </ul>
    );
};

export default Column;