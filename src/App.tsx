import React from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";
import Header from "./components/Header";
import MainPage from "./routes/MainPage";

function App() {
  const router = createBrowserRouter([
    {
      element: (
          <>
            <Header />
            <div>
              <Outlet />
            </div>
          </>
      ),
      children: [
        {
          path: "/",
          element: <div>Hello World!</div>
        },
        {
          path: "/auth",
          element: <AuthRoute />
        },
        {
          path: "/activities",
          element: <MainPage />
        }
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
