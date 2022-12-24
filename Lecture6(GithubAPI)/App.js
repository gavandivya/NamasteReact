import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/constants";

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);