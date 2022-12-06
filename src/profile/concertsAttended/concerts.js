import "../profile.css";

const ConcertsAttended = ({ concert }) => {
  return (
    <>
      <div className="col-xxl-3 w-40 h-30 me-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`/images/${concert.image}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{concert.title}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcertsAttended;
