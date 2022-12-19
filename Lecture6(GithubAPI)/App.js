import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import HeaderComponent from "./components/HeaderComponent";
// import BodyComponent from "./components/BodyComponent";
// import ErrorComponent from "./components/ErrorComponent";
// import ProfileComponent from "./components/ProfileRouteComponent";
// import AboutUsComponent from "./components/AboutUsComponent";
// import AboutUsChildComponent from './components/AboutUsChildComponent'
import { appRouter } from "./utils/constants";

// const App = () => (
//   <>
//     <HeaderComponent />
//     <Outlet />
//   </>
// );

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorComponent />,
//     children: [
//       { index: true, element: <BodyComponent /> },
//       {
//         path: "profile/:id",
//         element: <ProfileComponent />,
//       },
//       {
//         path: "/aboutUs",
//         element: <AboutUsComponent />,
//         children: [
//           {
//             path: "aboutUsChild",
//             element: <AboutUsChildComponent />
//           }
//         ]
//       },
//     ],
//   },
// ]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);