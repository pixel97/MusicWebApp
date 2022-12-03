import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import DetailsPage from "./event_details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
