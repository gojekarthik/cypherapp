import React, { useState } from "react";
import PossiblePrompts from "./prompts";

const PromptGenerator = (props) => {
  const [randomPrompt, setRandomPrompt] = useState("");

  const generateRandomPrompt = () => {
    // Check if the promptType prop is "random role"
    if (props.promptType === "Random Character") {
      // Generate a random index within the length of the role prompts array
      const randomIndex = Math.floor(Math.random() * PossiblePrompts[1].RolePrompt.length);

      // Get the role prompt at the randomly generated index
      const newPrompt = PossiblePrompts[1].RolePrompt[randomIndex];

      // Update the state with the new random role prompt
      setRandomPrompt(newPrompt);
    } else if(props.promptType === "Random Action"){
      // Generate a random index within the length of the action prompts array
      const randomIndex = Math.floor(Math.random() * PossiblePrompts[0].ActionPrompts.length);

      // Get the action prompt at the randomly generated index
      const newPrompt = PossiblePrompts[0].ActionPrompts[randomIndex];

      // Update the state with the new random action prompt
      setRandomPrompt(newPrompt);
    }else if((props.promptType === "Random BodyPart")){
      // Generate a random index within the length of the action prompts array
      const randomIndex = Math.floor(Math.random() * PossiblePrompts[2].BodyPartPrompts.length);

      // Get the action prompt at the randomly generated index
      const newPrompt = PossiblePrompts[2].BodyPartPrompts[randomIndex];

      // Update the state with the new random action prompt
      setRandomPrompt(newPrompt);
    }else {
      // Generate a random index within the length of the action prompts array
      const randomIndex = Math.floor(Math.random() * PossiblePrompts[3].ShapePrompts.length);

      // Get the action prompt at the randomly generated index
      const newPrompt = PossiblePrompts[3].ShapePrompts[randomIndex];

      // Update the state with the new random action prompt
      setRandomPrompt(newPrompt);
    }
  };

  return (
    <div>
      <div className="w-[334px] h-[475px] relative m-[20px]">
        <div className="w-[334px] h-[475px] left-0 top-0 absolute bg-slate-200 rounded-2xl border-8 border-black"></div>
        <div className="w-[246px] h-[120px] left-[29px] top-[52px] absolute text-black text-[32px] font-black font-['Inter']">{props.promptType}</div>
        <div className="w-[246px] h-[102px] left-[29px] top-[176px] absolute text-secondary text-[40px] font-black font-['Inter']">{randomPrompt}</div>
        <div className="w-[203px] h-[61px] left-[65px] top-[377px] absolute">
          <div className="w-[203px] h-[61px] left-0 top-0 absolute bg-secondary rounded-[36px]"></div>
          <button onClick={generateRandomPrompt} className="left-[27px] top-[9px] absolute text-white text-[32px] font-black font-['Inter']">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
