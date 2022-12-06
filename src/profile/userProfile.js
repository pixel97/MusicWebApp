import Header from "../event_details/header";
import Bookmarks from "./bookmarks";
import Concerts from "./concertsAttended";
import Artists from "./favoriteArtists";
import Followers from "./followers";
import Following from "./following";
import "./profile.css";
import Profile from "./profileCard";
import Reviews from "./reviews";
const UserProfile = () => {
  return (
    <>
      <Header />
      <div className="row p-2">
        <div className="col-4">
          <Profile />

          <br></br>
          <h2>Followers</h2>

          <Followers />

          <br></br>
          <h2>Following</h2>

          <Following />
        </div>

        <div className="col-8">
          <h2>Reviews</h2>
          <Reviews />

          <br></br>
          <h2>Bookmarks</h2>
          <Bookmarks />
          <br></br>
          <br></br>
          <h2>Concerts attended</h2>
          <Concerts />
          <br></br>
          <h2>Favorite Artists</h2>
          <Artists />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
