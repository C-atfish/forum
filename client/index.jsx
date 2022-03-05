import React from "react";

import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


function FrontPage() {
    return <div>
        <h2>Insane Forum</h2>

        <ul>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
            <li>
                <Link to={"/register"}>Register account</Link>
            </li>
        </ul>
    </div>;
}

function Login() {
    return <h2>Login</h2>;
}

function Register() {
    return <h2>Register</h2>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render(<Application/>, document.getElementById("app"))