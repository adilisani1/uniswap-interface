import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from './pages/Home/Home';
import Swap from "./pages/Swap/Swap";
import Token from "./pages/Tokens/Token";
import Pools from "./pages/Pools/Pools";
import Nfts from "./pages/Nfts/Nfts";

import "./app.css";


const Layout = () => {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/swap",
        element: <Swap />,
      },
      {
        path: "/tokens",
        element: <Token />
      },
      {
        path: "/pools",
        element: <Pools />
      },
      {
        path: "/nfts",
        element: <Nfts />
      },
      {
        path: "/nav",
        element: <Navbar />
      }
    ]
  },

]);



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

