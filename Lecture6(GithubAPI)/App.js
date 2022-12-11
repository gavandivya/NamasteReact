import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import ErrorComponent from "./components/ErrorComponent";
import ProfileComponent from "./components/ProfileRouteComponent";

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
