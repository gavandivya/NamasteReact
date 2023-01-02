
import BodyComponent from "../components/BodyComponent";
import AboutUsChildComponent from "../components/AboutUsChildComponent";
import ErrorComponent from "../components/ErrorComponent";
import AppLayout from "../components/AppLayoutComponent";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const ProfileComponent = lazy(() => import("../components/ProfileRouteComponent"));
const AboutUsComponent = lazy(() => import("../components/AboutUsComponent"));
const SearchTeamCityComponent = lazy(() => import("../components/SearchTeamCityComponent"));

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            { index: true, element: <BodyComponent /> },
            {
                path: "/profile/:id",
                element: <Suspense fallback={<h6>Loading...</h6>}><ProfileComponent /></Suspense>,
            },
            {
                path: "/aboutUs",
                element: <AboutUsComponent />,
                children: [
                    {
                        path: "aboutUsChild",
                        element: <AboutUsChildComponent />
                    }
                ]
            },
            {
                path: "/searchByCity",
                element: <Suspense fallback={<h6>Loading...</h6>}><SearchTeamCityComponent /></Suspense>,
            },
        ],
    },
])