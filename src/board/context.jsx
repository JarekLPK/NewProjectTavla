import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import React, {createContext, useEffect, useState} from "react";
import { firestore } from "../firebase_config/firebase.js";
import { generateRandomId } from "./utils.js";

export const TasksContext = createContext({
    deleteTaskFromBoard: () => {},
    changeTaskState: () => {},
    addNewTask: () => {},
    boardTasks: [],
});

const BoardContext = ({ children }) => {
    const [boardTasks, setBoardTasks] = useState( []);
    const fetchData = async ()=> {
        const  boardData = await getDocs(collection(firestore, "board"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setBoardTasks(newData[0].boardTasks ?? []);
                console.log(newData[0].boardTasks);
            })
        console.log(boardData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deleteTaskFromBoard = async (id) => {
        const updatedBoard = boardTasks.filter((task) => task.id !== id);
        setBoardTasks(updatedBoard);
        await setDoc(doc(firestore, "board", "tasks"), {updatedBoard});
    console.log(updatedBoard);
    };

    const changeTaskState = async (id, state) => {
        const updatedBoard = boardTasks.map((task) => {
            if (task.id === id) {
                task.state = state.toLowerCase();
            }
            return task;
        });
        setBoardTasks(updatedBoard);
        await setDoc(doc(firestore, "board", "tasks"), {updatedBoard});

    };
    const addNewTask = async (taskName, ac) => {
        const newTask = {
            taskName,
            id: generateRandomId(10),
            state: "to do",
            ac,
        };
        console.log(boardTasks);
        setBoardTasks(boardTasks.length ?[...boardTasks, newTask]:[newTask]);
        await setDoc(doc(firestore, "board", "tasks"), {boardTasks});
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