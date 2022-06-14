import React, { useState } from "react";
import logo from "./logo.svg";
import LoginForm from "@/components/loginform";

function App() {
    return (
        <div className='App'>
            <p className='text-slate-400'>Hello Vite + React!</p>
            <LoginForm method='get'></LoginForm>
        </div>
    );
}

export default App;
