import React from "react";
import "./style.css"

const TrainingChoice = (props) => {
    return (
        <div className="w-[371.17px] h-[115.11px] relative shadow">
        <div className="w-[371.17px] h-[115.11px] left-0 top-0 absolute bg-secondary rounded-2xl"></div>
        <div className="left-[26px] top-[30px] absolute text-slate-200 text-[32px] font-black font-['Inter'] text-left">{props.textContent}</div>
    </div>
    );
  };

  export default TrainingChoice;