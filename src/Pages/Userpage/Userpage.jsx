import { UserProfile } from '../../Components/index';
import a from '../../assets/m.jpg'


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
  ];

  return (
    <div>
      <UserProfile images={images} />
    </div>
  );
}

export default UserPage;
