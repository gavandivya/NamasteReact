import { createRoot } from "react-dom/client";
import HeaderComponent from "./Component/HeaderComponent";
import BodyComponent from "./Component/BodyComponent";

//Header
const App = () => (
  <>
    <HeaderComponent />
    <BodyComponent />

  </>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);



