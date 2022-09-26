import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./containers/Profile";
import Timer from "./containers/Timer";
import Dog from "./containers/Dog";
import { INITIAL_TIME, TOP_PAGE, LAST_PAGE } from "./constants/page";
import History from "./containers/History";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/timer" element={<Timer leftTime={INITIAL_TIME} />} />
        <Route
          path="/history"
          element={<History {...{ topPage: TOP_PAGE, lastPage: LAST_PAGE }} />}
        />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
