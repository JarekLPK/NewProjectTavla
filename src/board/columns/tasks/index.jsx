import React, { useContext } from "react";
import { TASK_STATES } from "../../constants";
import { TasksContext } from "../../context";
import styles from "./index.module.scss";

const Tasks = ({ tasks }) => {
    const { deleteTaskFromBoard, changeTaskState } = useContext(TasksContext);

    return (
        <ul className={styles["tasks-list"]}>
            {tasks.map((task, index) => {
                return (
                    <li className={styles.task} key={index}>
                        <button  className={styles["delete-button"]} onClick={() => deleteTaskFromBoard(task.id)}>X</button>
                        <p>{task.taskName}</p>
                        {task.ac && <p>A.C {task.ac}</p>}
                        <select
                            name="taskStates"
                            id="task-selector"
                            className={styles["state-select"]}
                            onChange={(e) => changeTaskState(task.id, e.target.value)}
                        >
                            <option key={`${task.state}-${task.id}`}>{task.state.toUpperCase()}</option>
                            {TASK_STATES.map(
                                (state, index) =>
                                    state.toLowerCase() !== task.state && (
                                        <option key={`${state}-${task.id}`}>{state}</option>
                                    )
                            )}
                        </select>
                    </li>
                );
            })}
        </ul>
    );
};

export default Tasks;

