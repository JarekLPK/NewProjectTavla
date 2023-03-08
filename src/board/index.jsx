import styles from "./index.module.scss";

const mock = [{
    taskName: "name1",
    user: "id",
    state: "TO-DO"
},
    {
        taskName: "name2",
        user: "id",
        state: "TO-DO"
    },
    {
        taskName: "name3",
        user: "id",
        state: "TO-DO"
    },
    {
        taskName: "name4",
        user: "id",
        state: "TO-DO"
    },
    {
        taskName: "name5",
        user: "id",
        state: "coding"
    }
];

const Board = () => {
    return (<div className={styles.boardContainer}>
        {mock.map(element => (
            <div>{element.taskName}</div>
            ) )}


    </div>)
}

export default Board