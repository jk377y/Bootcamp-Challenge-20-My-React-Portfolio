import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App"; // Import your App component here

createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
