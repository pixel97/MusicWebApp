import "../profile.css";

const UserBookmarks = ({ user }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <p>{user.bookmark}</p>
          <i
            className="fa-solid fa-star bookmark-icon"
            style={{ color: "orange" }}
          ></i>
        </li>
      </ul>
    </>
  );
};

export default UserBookmarks;
