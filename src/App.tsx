import React from 'react';
import './App.css';
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import ViewUserRoute from "./routes/users/ViewUserRoute";
import ActivityBaseRoute from "./routes/activities/ActivityBaseRoute";
import ErrorPage from "./components/ErrorPage";
import CreateActivityRoute from "./routes/CreateActivityRoute";
import UpdateActivityRoute from "./routes/UpdateActivityRoute";
import ActivityStatisticsRoute from "./routes/activities/ActivityStatisticsRoute";
import ActivityApplicationsRoute from "./routes/activities/ActivityApplicationsRoute";
import ActivityAttendancesRoute from "./routes/activities/ActivityAttendancesRoute";
import ActivityViewRoute from "./routes/activities/ActivityViewRoute";
import UserApplicationsRoute from "./routes/users/UserApplicationsRoute";
import UserAttendancesRoute from "./routes/users/UserAttendancesRoute";
import AllApplicationsRoute from "./routes/AllApplicationsRoute";
import loaderFactory from "./loaders/loaderFactory";

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
          element: <MainPage />,
          loader: loaderFactory((id) => "/activities")
        },
        {
          path: "/auth",
          element: <AuthRoute />
        },
        {
          path: "/users/:id",
          element: <><ViewUserRoute /><Outlet /></>,
          loader: loaderFactory((id) => `/users/${id}`),
          errorElement: <ErrorPage />,
          children: [
            {
              path: "applications",
              element: <UserApplicationsRoute />,
              loader: loaderFactory((id) => `/user/${id}/applications`),
            },
            {
              path: "attendances",
              element: <UserAttendancesRoute />,
              loader: loaderFactory((id) => `/user/${id}/attendances`),
            }
          ]
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
              loader: loaderFactory((id) => `/activities/${id}`),
            },
            {
              path: "applications",
              element: <ActivityApplicationsRoute />,
              loader: loaderFactory((id) => `/activity/${id}/applications`)
            },
            {
              path: "attendances",
              element: <ActivityAttendancesRoute />,
              loader: loaderFactory((id) => `/activity/${id}/attendances`)
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
          loader: loaderFactory((id) => `/activities/${id}`),
          errorElement: <ErrorPage />
        },
        {
          path: "applications",
          element: <AllApplicationsRoute />,
          loader: loaderFactory((id) => "/applications"),
          errorElement: <ErrorPage />
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
