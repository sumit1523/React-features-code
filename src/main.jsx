import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Regular imports
import Login from "./Login.jsx";
import Login1 from "./Login1.jsx";
import ImageSlider from "./ImageSlider.jsx";
import LoadMoreUser from "./LoadMoreUser.jsx";
import Todos from "./Todos.jsx";
import CountDownTimer from "./CountDownTimer.jsx";
import { Modal } from "./Modal.jsx";
import Quiz from "./Quiz.jsx";
import DigitalClock from "./DigitalClock.jsx";

// const Login = lazy(() => import("./Login.jsx"));
// const Login1 = lazy(() => import("./Login1.jsx"));
// const ImageSlider = lazy(() => import("./ImageSlider.jsx"));
// const LoadMoreUser = lazy(() => import("./LoadMoreUser.jsx"));
// const Todos = lazy(() => import("./Todos.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login1",
        element: <Login1 />,
      },
      {
        path: "/slider",
        element: <ImageSlider />,
      },
      {
        path: "/loadMoreUser",
        element: <LoadMoreUser />,
      },
      {
        path: "/todo",
        element: <Todos />,
      },
      {
        path: "/countDownTimer",
        element: <CountDownTimer initialTime={600} />,
      },
      {
        path: "/model",
        element: <Modal />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/digitalClock",
        element: <DigitalClock />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
