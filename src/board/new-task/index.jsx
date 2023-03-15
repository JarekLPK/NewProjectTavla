import { useContext, useState } from "react";
import { Context } from "../context.jsx";
import styles from "./index.module.scss";

const NewTask = ({ onClick }) => {
    const { addNewTask } = useContext(Context);
    const [taskName, setTaskName] = useState("");
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
    console.log(acceptanceCriteria);
    return (
        <div className={styles["overlay"]} onClick={(e) => e.stopPropagation()}>
            <div className={styles["new-task"]}>
                <button className={styles.close} onClick={() => onClick(false)}>
                    <span class="material-symbols-outlined">close</span>
                </button>
                <div className={styles["data-wrapper"]}>
                    <label htmlFor="task-name">Task name</label>
                    <input
                        className={styles["task-name"]}
                        name="task-name"
                        id="task-name"
                        onChange={({ target: { value } }) => setTaskName(value)}
                    />
                </div>
                <div className={styles["data-wrapper"]}>
                    <label
                        htmlFor="ac"
                        onChange={({ target: { value } }) => setAcceptanceCriteria(value)}
                    >
                        Acceptance criteria
                    </label>
                    <input className={styles["ac"]} name="ac" id="ac" />
                </div>
                <button
                    className={styles["add-task"]}
                    onClick={() => {
                        onClick(false);
                        addNewTask(taskName, acceptanceCriteria);
                    }}
                >
                    <span class="material-symbols-outlined">add_circle</span>
                </button>
            </div>
        </div>
    );
};

export default NewTask;