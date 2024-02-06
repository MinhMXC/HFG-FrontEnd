import React from 'react';
import './App.css';
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import ViewUserRoute from "./routes/ViewUserRoute";
import viewUserLoader from "./loaders/viewUserLoader";
import ActivityBaseRoute from "./routes/activities/ActivityBaseRoute";
import activityViewLoader from "./loaders/activityViewLoader";
import ErrorPage from "./components/ErrorPage";
import CreateActivityRoute from "./routes/CreateActivityRoute";
import UpdateActivityRoute from "./routes/UpdateActivityRoute";
import ActivityStatisticsRoute from "./routes/activities/ActivityStatisticsRoute";
import ActivityApplicationsRoute from "./routes/activities/ActivityApplicationsRoute";
import ActivityAttendancesRoute from "./routes/activities/ActivityAttendancesRoute";
import activityAttendancesLoader from "./loaders/activityAttendancesLoader";
import activityApplicationsLoader from "./loaders/activityApplicationsLoader";
import ActivityViewRoute from "./routes/activities/ActivityViewRoute";

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
          element: <>
            <ActivityBaseRoute />
            <Outlet />
          </>,
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <ActivityViewRoute />,
              loader: activityViewLoader
            },
            {
              path: "applications",
              element: <ActivityApplicationsRoute />,
              loader: activityApplicationsLoader
            },
            {
              path: "attendances",
              element: <ActivityAttendancesRoute />,
              loader: activityAttendancesLoader
            },
            {
              path: "statistics",
              element: <ActivityStatisticsRoute />
            }
          ]
        },
        {
          path: "activities/create",
          element: <CreateActivityRoute />
        },
        {
          path: "activities/update/:id",
          element: <UpdateActivityRoute />,
          loader: activityViewLoader,
          errorElement: <ErrorPage />
        },
        // {
        //   path: "*",
        //   element: <Navigate to="/" replace/>
        // },
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
