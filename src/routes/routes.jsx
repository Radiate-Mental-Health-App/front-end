import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import UserDashboard from "../pages/user/MoodTracker.jsx";
import MoodTracker from "../pages/user/MoodTracker.jsx";
import Journal from "../pages/user/Journal.jsx";
import Counseling from "../pages/user/Counseling.jsx";
import WellnessCenter from "../pages/user/WellnessCenter.jsx";

import SidebarLayout from "../layouts/SidebarLayout.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";
import Login from "../pages/auth/Login.jsx";

const routes = createRoutesFromElements(
  <>
    <Route path="/u" element={<SidebarLayout />}>
      <Route
        index
        element={<PrivateRoute component={<UserDashboard />} />}
      ></Route>
      <Route
        path="mood-tracker"
        element={<PrivateRoute component={<MoodTracker />} />}
      ></Route>
      <Route
        path="journal"
        element={<PrivateRoute component={<Journal />} />}
      ></Route>
      <Route
        path="counseling"
        element={<PrivateRoute component={<Counseling />} />}
      ></Route>
      <Route
        path="wellness-center"
        element={<PrivateRoute component={<WellnessCenter />} />}
      ></Route>
    </Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/" element={<Navigate to="/u" />}></Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
