import React from 'react';
import UserContextProvider from './Context/UserContextProvider';
import Profile from './Components/Profile'; 
import Login from './Components/Login';

function App() {
  return (
    <UserContextProvider>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>WELCOME TO CONTEXT API</h1>
        <Profile />
        <Login />
      </div>
    </UserContextProvider>
  );
}

export default App;
