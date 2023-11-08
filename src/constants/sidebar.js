import * as Icons from "../assets/icons";

export const USER_MENU = [
  { title: "Home", link: "/u", icon: Icons.HomeIcon },
  { title: "Mood Tracker", link: "/u/mood-tracker", icon: Icons.MoodIcon },
  { title: "Journal", link: "/u/journal", icon: Icons.JournalIcon },
  { title: "Counseling ", link: "/u/counseling", icon: Icons.CounselingIcon },
  {
    title: "Wellness Center",
    link: "/u/wellness-center",
    icon: Icons.WellnessIcon,
  },
];

export const PSYCHOLOGIST_MENU = [
  { title: "Home", link: "/p", icon: Icons.HomeIcon },
  { title: "Schedule", link: "/p/schedules", icon: Icons.ScheduleIcon },
  { title: "Appointment", link: "/p/appointments", icon: Icons.AppoinmentIcon },
  { title: "Profile", link: "/p/profile", icon: Icons.ProfileIcon },
];

export const ADMIN_MENU = [
  { title: "Home", link: "/a", icon: Icons.HomeIcon },
  { title: "Users", link: "/a/users", icon: Icons.UsersIcon },
  { title: "Resources", link: "/a/resources", icon: Icons.ResourcesIcon },
];
