import ReactDOM from "react-dom/client";
import { App } from "./app";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<RouterProvider router={router} />);
