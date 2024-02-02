import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthRoute from "./routes/AuthRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World!</div>
    },
    {
      path: "/auth",
      element: <AuthRoute />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
