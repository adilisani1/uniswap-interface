import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from './pages/Home/Home';
import Swap from "./pages/Swap/Swap";
import Token from "./pages/Tokens/Token";
import Pools from "./pages/Pools/Pools";
import Nfts from "./pages/Nfts/Nfts";
import PrivacyModal from './utils/PrivacyModal/PrivacyModal';
import Vote from "./pages/Vote/Vote";
import LiquidityModal from "./utils/LiquidityModal/LiquidityModal";
import SwapModal from "./utils/SwapModal/SwapModal";
import NftsDetails from "./pages/NftsDetails/NftsDetails";
import Wallet from "./components/Wallet/Wallet";

import "./app.css";
import useLocalStorage from "use-local-storage";


function App() {
  //SideBarConnectModal
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Swap Modal
  const [swapModal, setSwapModal] = useState(false);

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/swap",
          element: <Swap swapModal={swapModal} setSwapModal={setSwapModal} setIsModalOpen={setIsModalOpen} />,
        },
        {
          path: "/tokens",
          element: <Token />
        },
        {
          path: "/pools",
          element: <Pools setIsModalOpen={setIsModalOpen} />
        },
        {
          path: "/nfts",
          element: <Nfts />
        },

        {
          path: "/nfts-details",
          element: <NftsDetails />
        },

        {
          path: "/wallet",
          element: <Wallet />
        },

        {
          path: "/vote",
          element: <Vote />
        },
        {
          path: "/privacy",
          element: <PrivacyModal />
        },
        {
          path: "/liquidity",
          element: <LiquidityModal />
        },

        // {
        //   path: "/swap-modal",
        //   element: <SwapModal />
        // },
      ]
    },

  ]);

  return (
    <div className="app" >
      <RouterProvider router={router} />
    </div>
  );
}


const Layout = ({ isModalOpen, setIsModalOpen }) => {


  // Theme 
  const [theme, setTheme] = useLocalStorage('light', 'dark');
  const location = useLocation();
  function switchTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      {location.pathname !== "/wallet" && (
        <Navbar
          switchTheme={switchTheme}
          currentTheme={theme}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen} />
      )}
      <Outlet />
      {/* <Footer /> */}
    </div>
  )



}

export default App;

