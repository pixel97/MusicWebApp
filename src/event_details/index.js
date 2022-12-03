import "./index.css";
const DetailsPage = () => {
  return (
    <>
      <div className="row container-1">
        <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-10 col-sm-10">
          <img className="img-fluid logo-image" src="./images/logo.png"></img>
        </div>
        <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <i className="fas fa-user fa-xl user-icon"></i>
        </div>
      </div>

      <div className="row container-2" style={{ display: "inline-block" }}>
        <div className="image-div">
          <img className="event-banner" src="./images/concert.jpg"></img>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
            <div className="artist-details">
              <h1>Taylor Swift</h1>
              <br></br>
              <span>
                Rating 9.3/10 <i className="fa-regular fa-star"></i>
              </span>
              <br></br>
              <span>American Popstar</span>
              <br></br>
              <span>
                Tickets booked 4.5k &nbsp;{" "}
                <i className="fa-solid fa-ticket"></i>
              </span>
              <br></br>
              <br></br>

              <button>Book Tickets</button>
            </div>
          </div>
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
          <img className="artist-image" src="./images/taylor.jpg"></img>
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

      <div className="row">
        <h2>Top Reviews</h2>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="card">
            <div className="card-body">
              <img className="user-img" src="./images/user1.jfif"></img>
              <p className="card-text">
                Moonlight album is an amazing record and it deserved a GRAMMY.
                It is really underrated and so is Speak Now.
              </p>
              <a href="#" className="btn btn-primary">
                Full Review
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="card">
            <div className="card-body">
              <img className="user-img" src="./images/user2.jfif"></img>
              <p className="card-text">
                This album saved my life. It has inspired me in every way
                possible and I just love the photo shoots from it and taylors
                country twang. the first ever taylor song that i have ever heard
                is on this album. its called “stay beautiful” and its very
                special to me and holds an important place in my heart.
              </p>
              <a href="#" className="btn btn-primary">
                Full Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
