import "@fontsource/inter/400.css";  // Regular weight
import "@fontsource/inter/500.css";  // Medium weight
import "@fontsource/inter/600.css";  // Semibold weight
import "@fontsource/inter/700.css";  // Bold weight
import "@fontsource/dm-sans/400.css"; // Regular weight
import "@fontsource/dm-sans/500.css"; // Medium weight
import "@fontsource/dm-sans/700.css"; // Bold weight

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);