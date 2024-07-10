import { UserProfile } from '../../Components/index';
import a from '../../assets/m.jpg'
// import c from '../../assets/'
// import b from '../../assets/'

function UserPage() {
  // Example list of image URLs
  const images = [
    a,
    a,
    a,
    a,
    a,
    a,
    a,
    a,
    a,
    a,
    a,
    a,
    // Add more image URLs as needed
  ];

  return (
    <div>
      <UserProfile images={images} />
    </div>
  );
}

export default UserPage;
