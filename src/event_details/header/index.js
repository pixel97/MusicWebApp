import "../index.css";
const Header = () => {
  return (
    <div className="row container-1">
      <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-10 col-sm-10">
        <img className="img-fluid logo-image" src="./images/logo.png"></img>
      </div>
      <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2">
        <i className="fas fa-user fa-xl user-icon"></i>
      </div>
    </div>
  );
};

export default Header;
