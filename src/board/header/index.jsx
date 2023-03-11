import React from "react";
import { TASK_STATES } from "../constants.js";
import styles from "./index.module.scss";
const Header = () => {
    return (
        <ul className={styles["state-wrapper"]}>
            {TASK_STATES.map((state) => (
                <li key={state} className={styles["state-element"]}>
                    {state}
                </li>
            ))}
        </ul>
    );
};

export default Header;