import React from 'react';
import './App.css';
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import ViewUserRoute from "./routes/ViewUserRoute";
import viewUserLoader from "./loaders/viewUserLoader";
import ActivityRoute from "./routes/ActivityRoute";
import activityLoader from "./loaders/activityLoader";
import ErrorPage from "./components/ErrorPage";
import CreateActivityRoute from "./routes/CreateActivityRoute";

function App() {
  const router = createBrowserRouter([
    {
      element: (
          <>
            <Header />
            <div id="outlet">
              <Outlet />
            </div>
          </>
      ),
      children: [
        {
          path: "/",
          element: <MainPage />
        },
        {
          path: "/auth",
          element: <AuthRoute />
        },
        {
          path: "/users/:id",
          element: <ViewUserRoute />,
          loader: viewUserLoader,
          errorElement: <ErrorPage />,
        },
        {
          path: "activities/:id",
          element: <ActivityRoute />,
          loader: activityLoader,
          errorElement: <ErrorPage />,
        },
        {
          path: "activities/create",
          element: <CreateActivityRoute />
        },
        {
          path: "*",
          element: <Navigate to="/" replace/>
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
