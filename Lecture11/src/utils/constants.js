
import BodyComponent from "../components/BodyComponent";
import AboutUsChildComponent from "../components/AboutUsChildComponent";
import ErrorComponent from "../components/ErrorComponent";
import LoginComponent from "../components/LoginComponent";
import AppLayout from "../components/AppLayoutComponent";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "../store/reduxStore";

const ProfileComponent = lazy(() => import("../components/ProfileRouteComponent"));
const AboutUsComponent = lazy(() => import("../components/AboutUsComponent"));
const SearchTeamCityComponent = lazy(() => import("../components/SearchTeamCityComponent"));

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={store}><LoginComponent /></Provider>,
    },
    {
        path: "/app",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            { index: true, element: <BodyComponent /> },
            {
                path: "/app/profile/:id",
                element: <Suspense fallback={<h6>Loading...</h6>}><ProfileComponent /></Suspense>,
            },
            {
                path: "/app/aboutUs",
                element: <AboutUsComponent />,
                children: [
                    {
                        path: "/app/aboutUsChild",
                        element: <AboutUsChildComponent />
                    }
                ]
            },
            {
                path: "/app/searchByCity",
                element: <Suspense fallback={<h6>Loading...</h6>}><SearchTeamCityComponent /></Suspense>,
            },
        ],
    },
])