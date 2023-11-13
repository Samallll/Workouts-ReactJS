import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserInformation(props) {
  
    const[loading,setLoading] = useState(false);
    const[userData,setUserData] = useState(null);
    const[error,setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            setLoading(true);
      
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.count}`);
      
            setUserData(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching user data:', error);
            setError(error);
            setLoading(false);
          }
        };
      
        fetchUserData();
      }, [props.count]);

  return (
    <div>
      {loading && <p>Loading...</p>}

      {userData && (
        <div>
          <h2>User Information</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}

      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default UserInformation;
