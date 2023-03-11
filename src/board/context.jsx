import React, { createContext, useState } from "react";

export const TasksContext = createContext({
    deleteTaskFromBoard: () => {},
    changeTaskState: () => {},
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

    return (
        <TasksContext.Provider
            value={{ deleteTaskFromBoard, changeTaskState, boardTasks }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export default BoardContext;