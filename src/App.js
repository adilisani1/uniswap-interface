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
import PrivacyModal from './utils/PrivacyModal/PrivacyModal';

import "./app.css";
import Vote from "./pages/Vote/Vote";
import useLocalStorage from "use-local-storage";


const Layout = () => {

  const [theme, setTheme] = useLocalStorage('light', 'dark');

  function switchTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    console.log(theme)
  }


  return (
    <div className="app" data-theme={theme}>
      <Navbar switchTheme={switchTheme} currentTheme={theme} />
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
        path: "/vote",
        element: <Vote />
      },
      {
        path: "/privacy",
        element: <PrivacyModal />
      }
    ]
  },

]);



function App() {

  return (
    <div className="app" >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

