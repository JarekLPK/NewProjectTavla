import styles from "./index.module.scss";
import tasks from "../columns/tasks/index.jsx";
import {useContext, useState} from "react";
import {TasksContext} from "../context.jsx";

const Newtask = ({onClick}) => {
    const {addNewTask} = useContext(TasksContext);
    const [taskName, setTaskName] = useState("");
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("");

    return (
        <div className={styles["overlay"]} onClick={(e)=> e.stopPropagation()}>
            <div className={styles["new-task"]}>
                <button className={styles.close} onClick={() =>
                    onClick(false)
                }>X
                </button>
                <div className={styles["data-wrapper"]}>
                <label htmlFor="task-name">Task name</label>
                <input name="task-name" id="task-name" onChange={({target: {value}}) => setTaskName(value)}/>
                </div>
                <div className={styles["data-wrapper"]}>
                    <label htmlFor="ac" onChange={({target: {value}}) => setAcceptanceCriteria(value)}>Acceptance
                    criteria</label>
                <input name="ac" id="ac"/>
                </div>
                <button className={styles["add-task"]} onClick={() => {
                    onClick(false);
                    addNewTask(taskName, acceptanceCriteria)

                }
                }
                >Add task
            </button>
        </div>
</div>
)

};

export default Newtask;
