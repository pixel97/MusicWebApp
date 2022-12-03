import "../index.css";

const ArtistReviews = () => {
  return (
    <>
      <div className="row">
        <h2>Top Reviews</h2>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className=" card-prop card ">
            <div className="card-body">
              <img className="user-img" src="./images/user1.jfif"></img>
              <p className="card-text">
                Moonlight album is an amazing record and it deserved a GRAMMY.
                It is really underrated and so is Speak Now....
              </p>
              <span style={{ fontStyle: "italic" }}>Mili Tisdale</span>
              <br></br>
              <a href="#" className="btn btn-light">
                Full Review
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="card card-prop">
            <div className="card-body">
              <img className="user-img" src="./images/user2.jfif"></img>

              <p className="card-text">
                This album saved my life. It has inspired me in every way
                possible and I just love the photo shoots from it and taylors
                country twang. the first ever taylor song that....
              </p>
              <span style={{ fontStyle: "italic" }}>Joshua Brown</span>
              <br></br>
              <a href="#" className="btn btn-light">
                Full Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistReviews;
