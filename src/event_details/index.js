import artistDetailsReducer from "./reducers/artistDetails-reducer";
import artistReviewsReducer from "./reducers/artistReviews-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import Details from "./Details";
import Reviews from "./Reviews";

const store = configureStore({
  reducer: {
    details: artistDetailsReducer,
    review: artistReviewsReducer,
  },
});

const DetailsPage = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <>
        <div className="p-2">
          <div className="row container-1">
            <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-10 col-sm-10">
              <img
                className="img-fluid logo-image"
                src="./images/logo.png"
              ></img>
            </div>
            <div className="col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2">
              <i className="fas fa-user fa-xl user-icon"></i>
            </div>
          </div>

          <Details />
          <h2>Top Reviews</h2>
          <Reviews />
        </div>
      </>
    </Provider>
  );
};

export default DetailsPage;
