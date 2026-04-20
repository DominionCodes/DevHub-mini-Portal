 import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUserDetail();
  }, [id]);

  if (isLoading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>User nothong found</p>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button onClick={() => navigate('/users')} style={{ marginBottom: '20px' }}>
        ← Back to Users
      </button>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <h1>{user.name}</h1>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <div style={{ marginTop: '24px' }}>
          <h3>Address</h3>
          <p>
            {user.address?.street}, {user.address?.suite}<br />
            {user.address?.city}, {user.address?.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
