import React, { createContext, useState } from "react";
import {generateRandomId} from "./utils.js";

export const TasksContext = createContext({
    deleteTaskFromBoard: () => {},
    changeTaskState: () => {},
    addNewTask: () => {},
    boardTasks: [],
});

const BoardContext = ({ data, children }) => {
    const [boardTasks, setBoardTasks] = useState(data || []);

    const deleteTaskFromBoard = (id) => {
        const updatedBoard = boardTasks.filter((task) => task.id !== id);
        setBoardTasks(updatedBoard);
    };

    const changeTaskState = (id, state) => {
        const updatedBoard = boardTasks.map((task) => {
            if (task.id === id) {
                task.state = state.toLowerCase();
            }
            return task;
        });
        setBoardTasks(updatedBoard);
    };

    const addNewTask = (taskName, ac) => {
        const newTask ={
            taskName,
            id: generateRandomId(10),
            state:"to do",
            ac

        }
        console.log([...boardTasks, newTask]);

        setBoardTasks([...boardTasks, newTask]);


    };

    return (
        <TasksContext.Provider
            value={{ deleteTaskFromBoard, changeTaskState, addNewTask, boardTasks }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export default BoardContext;