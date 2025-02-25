import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    
    const { user } = useContext(UserContext);

    
    if (!user) return <div>Please login!</div>;

    
    return (
        <div>
            Welcome, {user.username}! <br />
            Your password is: {user.password}
        </div>
    );
}

export default Profile;
