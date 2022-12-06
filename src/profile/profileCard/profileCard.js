import "../profile.css";
const ProfileCard = ({ user }) => {
  console.log("User" + JSON.stringify(user));
  return (
    <>
      <div className="card">
        <div>
          <img
            className="card-img-top profile-image"
            src={`/images/${user.profilePicture}`}
            alt="Card image cap"
          />
          <i className="fa-solid fa-pen-to-square icon"></i>
        </div>

        <div className="card-body text-center">
          <h5 className="card-title">Milli Tisdale</h5>
          <p className="card-text">{user.bio}</p>

          <div className="row text-center">
            <div className="col-3" style={{ color: "black" }}>
              <span>Followers</span>
              &nbsp;{user.followers}
            </div>
            <div className="col-3" style={{ color: "black" }}>
              <span>Following</span>
              &nbsp;{user.following}
            </div>
            <div className="col-3" style={{ color: "black" }}>
              <span>Reviews</span>
              &nbsp;{user.reviews}
            </div>
            <div className="col-3" style={{ color: "black" }}>
              <span>Favorites</span>
              &nbsp;{user.favorites}
            </div>
          </div>
          <a href="#" className="btn btn-primary">
            Follow
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
