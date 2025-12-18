import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";  // ← "App" с большой буквы!
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
