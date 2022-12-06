import "../profile.css";

const FavArtists = ({ artists }) => {
  console.log(artists);
  return (
    <>
      <div className="col-xxl-3 w-40 h-30">
        <img
          src={`/images/${artists.profilePicture}`}
          width={50}
          height={70}
          className="rounded-circle w-50 h-60"
        />
      </div>
    </>
  );
};

export default FavArtists;
