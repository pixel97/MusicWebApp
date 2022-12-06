import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import DetailsPage from "./event_details";
import UserProfile from "./profile/userProfile";
import PersonalProfile from "./profile/personalProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/myprofile" element={<PersonalProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
