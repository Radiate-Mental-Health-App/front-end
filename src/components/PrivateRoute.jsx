import { Navigate } from "react-router";

import { userState } from "../features/user-auth/AuthAtoms.js";
import { useRecoilState } from "recoil";

const PrivateRoute = (Component) => {
  const [user, setUser] = useRecoilState(userState);

  setUser({
    id: 1,
    name: "Umar",
  });

  console.log("Tes: " + user);

  if (!user) {
    return <Component />;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
