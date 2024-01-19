import React from "react";
import PromptGenerator from "../promptsgen";
import NavBar from "../navbar";
import Timer from "../timer";

function PlayCharacterPage(){
return(
    <div className="bg-slate-200 h-screen">
        <NavBar />
        <div className="flex justify-center items-center mt-[130px]">
        <PromptGenerator promptType="Random Character" />
        <Timer />
        <PromptGenerator promptType="Random Action" />
        </div>
    </div>
)
}

export default PlayCharacterPage;