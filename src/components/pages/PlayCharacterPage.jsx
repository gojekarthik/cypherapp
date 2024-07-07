import React from "react";
import PromptGenerator from "../promptsgen";
import NavBar from "../navbar.jsx";
import Timer from "../timer.jsx";
import LoginButton from "../LoginButton.jsx";

function PlayCharacterPage(){
return(
    <div className="bg-slate-200 h-screen">
        <NavBar />
        <div className="flex justify-center items-center mt-[130px]">
        <PromptGenerator promptType="Random Character" />
        <Timer />
        <PromptGenerator promptType="Random Action" />
        <LoginButton />
        </div>
    </div>
)
}

export default PlayCharacterPage;