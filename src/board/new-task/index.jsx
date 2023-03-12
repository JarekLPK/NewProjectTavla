import { useContext, useState } from "react";
import { Context } from "../context.jsx";
import styles from "./index.module.scss";

const NewTask = ({ onClick }) => {
    const { addNewTask } = useContext(Context);
    const [taskName, setTaskName] = useState("");
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("");

    return (
        <div className={styles["overlay"]} onClick={(e) => e.stopPropagation()}>
            <div className={styles["new-task"]}>
                <button className={styles.close} onClick={() => onClick(false)}>
                    X
                </button>
                <div className={styles["data-wrapper"]}>
                    <label htmlFor="task-name">Task name</label>
                    <input
                        name="task-name"
                        id="task-name"
                        onChange={({ target: { value } }) => setTaskName(value)}
                    />
                </div>
                <div className={styles["data-wrapper"]}>
                    <label
                        htmlFor="ac"
                    >
                        Acceptance criteria
                    </label>
                    <input name="ac" id="ac" onChange={({ target: { value } }) => setAcceptanceCriteria(value)}/>
                </div>
                <button
                    className={styles["add-task"]}
                    onClick={() => {
                        onClick(false);
                        addNewTask(taskName, acceptanceCriteria);
                    }}
                >
                    Add task
                </button>
            </div>
        </div>
    );
};

export default NewTask;