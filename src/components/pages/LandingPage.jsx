import React from "react";
import NavBar from "../navbar.jsx";
import LoginButton from "../LoginButton.jsx";


function LandingPage(){
return(
    <div className="bg-slate-200 h-screen">
        <NavBar />
        <div>
            <h1>hello world</h1>
            <LoginButton/>
        </div>
    </div>
)
}

export default LandingPage;