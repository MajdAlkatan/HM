// src/pages/UserPage.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserProfile } from '../../Components/index';
import a from '../../assets/m.jpg'; // Default image if needed
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      try {
        const response = await axios.get('http://127.0.0.1:8000/profiles', {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        setProfiles(response.data.results); // Adjust based on your API response structure
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Default image URL for fallback
  const defaultImage = a;

  // Transform profiles data to match the props expected by UserProfile
  const images = profiles.map(profile => profile.avatars || defaultImage);
  const names = profiles.map(profile => profile.user_names);
  const ids = profiles.map(profile => profile.users); // Ensure this matches your API response

  // Function to navigate to the profile page
  const handleNavigate = (id) => {
    navigate(`/user/${id}`, { state: { profiles } }); // Pass profiles data to the detail page
  };

  return (
    <div>
      <UserProfile images={images} ids={ids} names={names} navigate={handleNavigate} />
    </div>
  );
}

export default UserPage;
