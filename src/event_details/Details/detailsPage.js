import "../index.css";
import { useSelector } from "react-redux";

const ArtistDetails = ({ details }) => {
  console.log(JSON.stringify(details));
  return (
    <>
      <div className="row container-2" style={{ display: "inline-block" }}>
        <div className="image-div">
          <img
            className="event-banner"
            src={`/images/${details.bannerPicture}`}
          ></img>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <div className="artist-details">
              <h1>
                {details.firstName}&nbsp;{details.lastName}
              </h1>
              <br></br>
              <span>
                Rating {details.rating}/10{" "}
                <i className="fa-regular fa-star"></i>
              </span>
              <br></br>
              <span>
                {details.location} &nbsp; {details.type}
              </span>
              <br></br>
              <span>
                Tickets booked {details.tickets} &nbsp; &nbsp;
                <i className="fa-solid fa-ticket"></i>
              </span>
              <br></br>
              <br></br>

              <button className="btn btn-primary">Book Tickets</button>
            </div>
          </div>
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <img
            className="artist-image rounded"
            src={`/images/${details.profilePicture}`}
          ></img>
        </div>
      </div>

      <div className="container-3">
        <hr></hr>
        <h1>About the artist</h1>
        <span>
          Taylor Alison Swift is an American singer-songwriter. Her discography
          spans multiple genres, and her narrative songwriting—often inspired by
          her personal life—has received critical praise.Having sold over 200
          million records globally, Swift is one of the best-selling musicians
          of all time. She is the only act to have five albums open with over
          one million copies sold in the US.
        </span>
        <hr></hr>
      </div>
    </>
  );
};

export default ArtistDetails;
