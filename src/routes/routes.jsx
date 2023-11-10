import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import UserDashboard from "@/pages/user/mood-tracker/MoodTracker.jsx";
import MoodTracker from "@/pages/user/mood-tracker/MoodTracker.jsx";
import Journal from "@/pages/user/journal/Journal.jsx";
import Counseling from "@/pages/user/counseling/Counseling.jsx";
import WellnessCenter from "@/pages/user/wellness-center/WellnessCenter.jsx";

import PsychologistDashboard from "@/pages/psychologist/default";
import Schedule from "@/pages/psychologist/schedules";
import Appointment from "@/pages/psychologist/dataTables";
import Profile from "@/pages/psychologist/profile";

import AdminDashboard from "@/pages/admin/home/Home";
import User from "@/pages/admin/list/List";
import Resource from "@/pages/admin/Resource.jsx";

import SidebarLayout from "@/layouts/SidebarLayout.jsx";
import Login from "@/pages/auth/Login.jsx";

import { ADMIN_MENU, PSYCHOLOGIST_MENU, USER_MENU } from "@/constants/sidebar.js";
import PsychologistDetails from "@/pages/user/counseling/psyDetail.component";
import CounselingPayment from "@/pages/user/counseling/CounselingPayment";
import AppointmentDetail from "@/pages/psychologist/dataTables/AppointmentDetail";
import CounselingPaymentDone from "@/pages/user/counseling/CounselingPaymentDone";

const routes = createRoutesFromElements(
  <>
    <Route path="/u" element={<SidebarLayout menu={USER_MENU} />}>
      <Route index element={<UserDashboard />}></Route>
      <Route path="mood-tracker" element={<MoodTracker />}></Route>
      <Route path="journal" element={<Journal />}></Route>
      <Route path="counseling" element={<Counseling />}></Route>
      <Route path="counseling/payment" element={<CounselingPayment />}></Route>
      <Route path="counseling/payment/done" element={<CounselingPaymentDone />}></Route>
      <Route path="wellness-center" element={<WellnessCenter />}></Route>
    </Route>
    <Route path="/p" element={<SidebarLayout menu={PSYCHOLOGIST_MENU} />}>
      <Route index element={<PsychologistDashboard />}></Route>
      <Route path="details/:id" element={<PsychologistDetails />} />
      <Route path="schedules" element={<Schedule />}></Route>
      <Route path="appointments" element={<Appointment />}></Route>
      <Route path="appointments/detail" element={<AppointmentDetail />}></Route>
      <Route path="profile" element={<Profile />}></Route>
    </Route>
    <Route path="/a" element={<SidebarLayout menu={ADMIN_MENU} />}>
      <Route index element={<AdminDashboard />}></Route>
      <Route path="users" element={<User />}></Route>
      <Route path="resources" element={<Resource />}></Route>
    </Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/" element={<Navigate to="/u" />}></Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
