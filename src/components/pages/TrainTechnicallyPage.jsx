import React from "react";
import PromptGenerator from "../promptsgen";
import NavBar from "../navbar";
import Timer from "../timer";

function TrainTechnically(){
return(
    <div className="bg-slate-200 h-screen">
        <NavBar />
        <div className="flex justify-center items-center mt-[130px]">
        <PromptGenerator promptType="Random BodyPart" />
        <Timer />
        <PromptGenerator promptType="Random Shape" />
        </div>
    </div>
)
}

export default TrainTechnically;