import { useState } from "react";
import Column from "./columns";
import Auth from "./auth";
import BoardContext from "./context";
import Header from "./header";
import styles from "./index.module.scss";
import NewTask from "./new-task";

const Board = () => {
    const [isNewTaskVisible, setIsNewTaskVisible] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(
        Boolean(localStorage.getItem("isUserLoggedIn"))
    );

    return (
        <div className={styles["board-container"]}>

            <BoardContext onClick={setIsUserLogged}>
                {isUserLogged ? (
                    <>
                        <button
                        onClick={() => {
                            localStorage.clear();
                            setIsUserLogged(false);
                        }}
                    >
                        Log Out
                    </button>

                        <Header />
                        <Column />
                        {isNewTaskVisible && <NewTask onClick={setIsNewTaskVisible} />}
                        <button onClick={() => setIsNewTaskVisible(true)}>New task</button>
                    </>
                ) : (
                    <Auth />
                )}
            </BoardContext>
        </div>
    );
};

export default Board;