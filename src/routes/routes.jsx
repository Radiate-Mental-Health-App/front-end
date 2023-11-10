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
import Booking from "../pages/user/Booking.jsx";

import PsychologistDashboard from "../pages/psychologist/PsychologistDashboard.jsx";
import Appointment from "../pages/psychologist/Appointment.jsx";
import Schedule from "../pages/psychologist/Schedule.jsx";
import Profile from "../pages/psychologist/Profile.jsx";
import Help from "../pages/psychologist/Help.jsx";

import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
// user
import User from "../pages/admin/user/UserList.jsx";
import UserDetail from "../pages/admin/user/UserDetail.jsx";
import UserEdit from "../pages/admin/user/UserEdit.jsx";

// psychologyst
import List from "../pages/admin/psychologist/List.jsx";
import Detail from "../pages/admin/psychologist/Detail.jsx";
import Edit from "../pages/admin/psychologist/Edit.jsx";

import Resource from "../pages/admin/Resource.jsx";

import SidebarLayout from "../layouts/SidebarLayout.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";
import Login from "../pages/auth/Login.jsx";
import {
  ADMIN_MENU,
  PSYCHOLOGIST_MENU,
  USER_MENU,
} from "../constants/sidebar.js";



const routes = createRoutesFromElements(
  <>
    <Route path="/u" element={<SidebarLayout menu={USER_MENU} />}>
      <Route index element={<UserDashboard />}></Route>
      <Route path="mood-tracker" element={<MoodTracker />}></Route>
      <Route path="journal" element={<Journal />}></Route>
      <Route path="counseling" element={<Counseling />}></Route>
      <Route path="wellness-center" element={<WellnessCenter />}></Route>
      
    </Route>
    <Route path="/p" element={<SidebarLayout menu={PSYCHOLOGIST_MENU} />}>
      <Route index element={<PsychologistDashboard />}></Route>
      <Route path="schedules" element={<Schedule />}></Route>
      <Route path="appointments" element={<Appointment />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="help" element={<Help />}></Route>
    </Route>
    <Route path="/a" element={<SidebarLayout menu={ADMIN_MENU} />}>
      <Route index element={<AdminDashboard />} />
      <Route path="users">
        <Route index element={<User />} />
        <Route path=":id" element={<UserDetail />} />
        <Route path="edit/:id" element={<UserEdit />} />
      </Route>
      <Route path="psychologist">
        <Route index element={<List />} />
        <Route path=":id" element={<Detail />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="book/:id" element={<Booking />} />
      </Route>
      <Route path="resources" element={<Resource />}/>
    </Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/" element={<Navigate to="/u" />}></Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
