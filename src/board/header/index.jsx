import React, { useContext } from "react";
import { TASK_STATES } from "../constants.js";
import { Context } from "../context.jsx";
import styles from "./index.module.scss";
const Header = () => {
    const { loggedUser } = useContext(Context);
    return (
        <>
            <p>{loggedUser}</p>
            <ul className={styles["state-wrapper"]}>
                {TASK_STATES.map((state) => (
                    <li key={state} className={styles["state-element"]}>
                        {state}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Header;