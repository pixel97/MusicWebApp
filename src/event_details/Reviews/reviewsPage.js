import "../index.css";

const ReviewsComponent = ({ review }) => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className=" card-prop card ">
            <div className="card-body">
              <img
                className="user-img"
                src={`/images/${review.profilePicture}`}
              ></img>
              <p className="card-text">{review.review}</p>
              <span style={{ fontStyle: "italic" }}>
                {review.firstName} &nbsp; {review.lastName}
              </span>
              <br></br>
              <a href="#" className="btn btn-light">
                Full Review
              </a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default ReviewsComponent;
