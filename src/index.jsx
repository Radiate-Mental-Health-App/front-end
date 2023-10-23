import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import router from "./routes/routes.jsx";
import globalStyles from "./themes/theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={globalStyles}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);
