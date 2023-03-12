import React, { useContext, useState } from "react";
import { Context } from "../context";

const Auth = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [logInOrRegister, setLogInOrRegister] = useState(null);
    const { registerUser, logInUser } = useContext(Context);

    const handleLogInAndRegister = () => {
        if (logInOrRegister === "register") {
            return (
                <form
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
                        value={name}
                        name="name"
                        id="name"
                        onChange={({ target: { value } }) => setName(value)}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        name="password"
                        id="password"
                        type="password"
                        onChange={({ target: { value } }) => setPassword(value)}
                    ></input>
                    <label htmlFor="repeatPassword">Password</label>
                    <input
                        value={repeatPassword}
                        name="repeatPassword"
                        id="repeatPassword"
                        type="password"
                        onChange={({ target: { value } }) => setRepeatPassword(value)}
                    ></input>
                    <button type="submit">Register</button>
                </form>
            );
        } else if (logInOrRegister === "log-in") {
            return (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        logInUser(name, password);
                        setName("");
                        setPassword("");
                    }}
                >
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        name="name"
                        id="name"
                        onChange={({ target: { value } }) => setName(value)}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        name="password"
                        id="password"
                        type="password"
                        onChange={({ target: { value } }) => setPassword(value)}
                    ></input>
                    <button type="submit">Log In</button>
                </form>
            );
        }
    };

    return (
        <>
            <div>
                <button onClick={() => setLogInOrRegister("register")}>Register</button>
                <button onClick={() => setLogInOrRegister("log-in")}>Log In</button>
            </div>
            {handleLogInAndRegister()}
        </>
    );
};

export default Auth;
