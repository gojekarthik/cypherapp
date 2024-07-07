import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[1920px] h-[117px] flex flex-row justify-between shadow-xl">
      <button onClick={() => navigate('/Home')}>
        <img className="w-[280.42px] h-[88px] relative ml-7" src="logo.png" alt="Logo" />
      </button>
      {isAuthenticated && (
        <button onClick={() => logout({ returnTo: window.location.origin })} className="justify-end bg-secondary text-primary p-4 mr-4">
          Logout
        </button>
      )}
    </div>
  );
}

export default NavBar;
