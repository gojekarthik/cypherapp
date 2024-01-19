import React from "react";
import ReactDOM from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";



function NavBar() {
    const navigate = useNavigate();
    return(
         <div className="w-[1920] h-[117] flex flex-row justify-between shadow-xl" >
                <button onClick={()=>navigate('/')}>
                <img className="w-[280.42px] h-[88] relative ml-7" src="src/components/logo.svg"></img>
                </button>
                <p className="mr-10 flex items-center text-blackctext-2xl font-black font-['Inter']">How to Use</p>
        </div>
    )
}

export default NavBar;