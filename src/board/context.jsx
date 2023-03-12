import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { firestore } from "../firebase_config/firebase.js";
import { generateRandomId } from "./utils.js";

export const Context = createContext({
    deleteTaskFromBoard: () => {},
    changeTaskState: () => {},
    addNewTask: () => {},
    registerUser: () => {},
    logInUser: () => {},
    users: [],
    boardTasks: [],
    loggedUser: "",
});

const BoardContext = ({ onClick, children }) => {
    const [boardTasks, setBoardTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [loggedUser, setLoggedUser] = useState("");

    const fetchData = async () => {
        getDocs(collection(firestore, "board")).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setBoardTasks(newData[0].boardTasks ?? []);
            setUsers(newData[0].users ?? []);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteTaskFromBoard = async (id) => {
        const updatedBoard = boardTasks.filter((task) => task.id !== id);
        setBoardTasks(updatedBoard);
        await setDoc(doc(firestore, "board", "tasks"), {
            boardTasks: updatedBoard,
            users,
        });
    };
    const changeTaskState = async (id, state) => {
        const updatedBoard = boardTasks.map((task) => {
            if (task.id === id) {
                task.state = state.toLowerCase();
                task.user = loggedUser;
            }
            return task;
        });

        setBoardTasks(updatedBoard);

        await setDoc(doc(firestore, "board", "tasks"), {
            boardTasks: updatedBoard,
            users,
        });
    };

    const addNewTask = async (taskName, ac) => {
        const newTask = {
            taskName,
            id: generateRandomId(10),
            state: "to do",
            ac,
        };
        setBoardTasks([...boardTasks, newTask]);
        await setDoc(doc(firestore, "board", "tasks"), {
            boardTasks: [...boardTasks, newTask],
            users,
        });
    };

    const registerUser = async (name, password, repeatPassword) => {
        if (
            !name.length ||
            !password.length ||
        !repeatPassword.length ||
        repeatPassword !== password
    ) {
            return alert("Data is invalid");
        }
        const newUser = {
            name,
            password,
        };
        if (
            users.find((user) => user.name === name && user.password === password)
        ) {
            return alert("User with this name already exist");
        }

        await setDoc(doc(firestore, "board", "tasks"), {
            users: [...users, newUser],
            boardTasks,
        }).then(() => {
            setUsers([...users, newUser]);
            localStorage.setItem("isUserLoggedIn", true);
            onClick(true);
            setLoggedUser(name);
        });
    };

    const logInUser = (name, password) => {
        if (
            !users.find((user) => user.name === name && user.password === password)
        ) {
            return alert("Data is invalid");
        }
        localStorage.setItem("isUserLoggedIn", true);
        setLoggedUser(name);
        onClick(true);
    };

    return (
        <Context.Provider
            value={{
                deleteTaskFromBoard,
                changeTaskState,
                addNewTask,
                registerUser,
                logInUser,
                users,
                boardTasks,
                loggedUser,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default BoardContext;
