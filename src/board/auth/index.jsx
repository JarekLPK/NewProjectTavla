import { Context } from "../context";
import styles from "./index.module.scss";
import { useState, useContext } from "react";

const Auth = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [logInOrRegister, setLogInOrRegister] = useState("log-in");
    const { registerUser, logInUser } = useContext(Context);

    const handleLogInAndRegister = () => {
        if (logInOrRegister === "register") {
            return (
                <form
                    className={styles["auth-register"]}
                    onSubmit={(e) => {
                        e.preventDefault();
                        registerUser(name, password, repeatPassword);
                        setName("");
                        setPassword("");
                        setRepeatPassword("");
                    }}
                >
                    <label htmlFor="name">Name</label>
                    <input
                        className={styles["auth-name"]}
                        value={name}
                        name="name"
                        id="name"
                        onChange={({ target: { value } }) => setName(value)}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        className={styles["auth-password"]}
                        value={password}
                        name="password"
                        id="password"
                        type="password"
                        onChange={({ target: { value } }) => setPassword(value)}
                    ></input>
                    <label htmlFor="repeatPassword">Password</label>
                    <input
                        className={styles["auth-repeat-password"]}
                        value={repeatPassword}
                        name="repeatPassword"
                        id="repeatPassword"
                        type="password"
                        onChange={({ target: { value } }) => setRepeatPassword(value)}
                    ></input>
                    <button className={styles["register-button"]} type="submit">
                        Register
                    </button>
                </form>
            );
        } else if (logInOrRegister === "log-in") {
            return (
                <form
                    className={styles["auth-log-in"]}
                    onSubmit={(e) => {
                        e.preventDefault();
                        logInUser(name, password);
                        setName("");
                        setPassword("");
                    }}
                >
                    <label htmlFor="name">Name</label>
                    <input
                        className={styles["auth-name"]}
                        value={name}
                        name="name"
                        id="name"
                        onChange={({ target: { value } }) => setName(value)}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        className={styles["auth-password"]}
                        value={password}
                        name="password"
                        id="password"
                        type="password"
                        onChange={({ target: { value } }) => setPassword(value)}
                    ></input>
                    <button className={styles["log-in-button"]} type="submit">
                        Log In
                    </button>
                </form>
            );
        }
    };
    return (
        <>
            <div className={styles["auth-wrapper"]}>
                <button
                    className={styles["register-button"]}
                    onClick={() => setLogInOrRegister("register")}
                >
                    Register
                </button>
                <button
                    className={styles["login-button"]}
                    onClick={() => setLogInOrRegister("log-in")}
                >
                    Log In
                </button>
            </div>
            {handleLogInAndRegister()}
        </>
    );
};

export default Auth;