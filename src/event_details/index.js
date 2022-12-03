import ArtistDetails from "./artist-details";
import ArtistReviews from "./artist-reviews";
import "./index.css";
const DetailsPage = () => {
  return (
    <>
      <div className="p-2">
        <div className="row container-1">
          <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-10 col-sm-10">
            <img className="img-fluid logo-image" src="./images/logo.png"></img>
          </div>
          <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <i className="fas fa-user fa-xl user-icon"></i>
          </div>
        </div>

        <ArtistDetails />
        <ArtistReviews />
      </div>
    </>
  );
};

export default DetailsPage;
