import React from "react";
import ReactDOMClient from "react-dom/client";
import { FrameScreen } from "./screens/FrameScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FrameScreen />);
