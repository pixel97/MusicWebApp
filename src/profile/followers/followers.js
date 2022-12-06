import "../profile.css";

const UserFollowers = ({ user }) => {
  console.log("In followers" + JSON.stringify(user));
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-10">
              <div className="fw-bold">
                {user.firstName}&nbsp;{user.lastName}
              </div>
              <div style={{ color: "grey" }}>{user.handle}</div>
            </div>
            <div className="col-2">
              <img
                width={60}
                height={55}
                className="float-end rounded-circle"
                src={`/images/${user.profilePicture}`}
              />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default UserFollowers;
