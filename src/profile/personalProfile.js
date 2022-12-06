import Header from "../event_details/header";
import Bookmarks from "./bookmarks";
import Artists from "./favoriteArtists";
import "./profile.css";
import Profile from "./profileCard";
import Reviews from "./reviews";
const PersonalProfile = () => {
  return (
    <>
      <Header />
      <div className="row p-2">
        <div className="col-4">
          <Profile />

          <br></br>
          <h2> My Favorite Artists</h2>

          <Artists />
        </div>

        <div className="col-8">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row">
                <div className="col-xxl-2">
                  <span>First Name</span>
                </div>
                <div className="col-xxl-10">
                  <input
                    type="text"
                    name="First name"
                    placeholder="First Name"
                    className="w-100"
                  />
                </div>
              </div>
              <br></br>

              <div className="row">
                <div className="col-xxl-2">
                  <span>Last Name</span>
                </div>
                <div className="col-xxl-10">
                  <input
                    type="text"
                    name="First name"
                    placeholder="Last Name"
                    className="w-100"
                  />
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-xxl-2">
                  <span>Email</span>
                </div>
                <div className="col-xxl-10">
                  <input
                    type="text"
                    name="First name"
                    placeholder="Email"
                    className="w-100"
                  />
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-xxl-2">
                  <span>Phone</span>
                </div>
                <div className="col-xxl-10">
                  <input
                    type="text"
                    name="First name"
                    placeholder="Phone Number"
                    className="w-100"
                  />
                </div>
              </div>
              <br></br>

              <div className="row">
                <div className="col-xxl-2">
                  <span>Address</span>
                </div>
                <div className="col-xxl-10">
                  <input
                    type="text"
                    name="First name"
                    placeholder="Address"
                    className="w-100"
                  />
                </div>
              </div>
              <br></br>

              <div className="row">
                <div className="col-xxl-2">
                  <span>Bio</span>
                </div>
                <div className="col-xxl-10">
                  <input
                    type="text"
                    name="First name"
                    placeholder="Bio"
                    className="w-100"
                  />
                </div>
              </div>
              <br></br>
              <div className="text-center">
                <button className="btn btn-primary">Submit</button>
              </div>
            </li>
          </ul>
          <br></br>
          <h2> My Reviews</h2>
          <Reviews />

          <br></br>
          <h2> My Bookmarks</h2>
          <Bookmarks />
          <br></br>
        </div>
      </div>
    </>
  );
};

export default PersonalProfile;
