import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";
import RoterProvidorAniflorsDemo from "./app/routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RoterProvidorAniflorsDemo />
  </BrowserRouter>
);
