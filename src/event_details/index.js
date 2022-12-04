import artistDetailsReducer from "./reducers/artistDetails-reducer";
import artistReviewsReducer from "./reducers/artistReviews-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import Details from "./Details";
import Reviews from "./Reviews";
import Header from "./header";

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
          <Header />
          <Details />
          <Reviews />
        </div>
      </>
    </Provider>
  );
};

export default DetailsPage;
