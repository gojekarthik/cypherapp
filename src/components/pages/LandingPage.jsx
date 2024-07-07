import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../navbar.jsx';
import LoginButton from '../LoginButton.jsx';

function LandingPage() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/Homepage'); // Redirect to the Hoempage
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-200 h-screen">
      <NavBar />
      <div>
        <h1>Hello World</h1>
        {!isAuthenticated && <LoginButton />}
      </div>
    </div>
  );
}

export default LandingPage;
