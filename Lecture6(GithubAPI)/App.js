import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HeaderComponent from "./Component/HeaderComponent";
import BodyComponent from "./Component/BodyComponent";
import ErrorComponent from "./Component/ErrorComponent";
import ProfileComponent from "./Component/ProfileRouteComponent";

const App = () => (
  <>
    <HeaderComponent />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <BodyComponent /> },
      {
        path: "/:id",
        element: <ProfileComponent />,
      },
    ],
  },
  // {
  //   path: "/aboutUs/:id",
  //   element: <AboutUsComponent />,
  // }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
