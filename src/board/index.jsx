import { useState } from "react";
import Auth from "./auth";
import Column from "./columns";
import BoardContext from "./context";
import Header from "./header";
import styles from "./index.module.scss";
import NewTask from "./new-task";

const Board = () => {
    const [isNewTaskVisible, setIsNewTaskVisible] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(
        localStorage.getItem("isUserLoggedIn")
    );

    return (
        <div className={styles["board-container"]}>
            {isUserLogged && (
                <button
                    className={styles["log-out-button"]}
                    onClick={() => {
                        localStorage.clear();
                        setIsUserLogged(false);
                    }}
                >
                    <span className="material-symbols-outlined">logout</span>
                </button>
            )}
            <BoardContext onClick={setIsUserLogged}>
                {isUserLogged ? (
                    <>
                        <Header />
                        <Column />
                        {isNewTaskVisible && <NewTask onClick={setIsNewTaskVisible} />}
                        <button
                            className={styles["new-task-button"]}
                            onClick={() => setIsNewTaskVisible(true)}
                        >
                            New task
                        </button>
                    </>
                ) : (
                    <Auth />
                )}
            </BoardContext>
        </div>
    );
};

export default Board;
