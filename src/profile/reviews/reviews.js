import "../profile.css";

const UserReviews = ({ user }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <p>{user.review}</p>
        </li>
      </ul>
    </>
  );
};

export default UserReviews;
