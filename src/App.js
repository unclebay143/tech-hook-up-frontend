import "./App.css";
import { FeedLayout } from "./components/layout/FeedLayout";
import Feeds from "./pages/feeds";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
// import Solution from "./pages/MoralisTest";
// import { HookFormModal } from "./pages/new-hook-card/HookFormModal";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { ExploreTrends } from "./pages/explore/trends/ExploreTrends";
import AppContext from "./helper/context/appContext/appContext";
import { ExploreTags } from "./pages/explore/tags/ExploreTags";
import { Explore } from "./pages/explore/Explore";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const { isDarkMode } = useContext(AppContext);

  // const menuConfig = [
  //   {
  //     title: "Home",
  //   },
  //   {
  //     title: "Services",
  //     subItems: ["Cooking", "Cleaning"],
  //   },
  //   {
  //     title: "Contact",
  //     subItems: ["Phone", "Mail"],
  //   },
  // ];
  return (
    // <Solution menuConfig={menuConfig} />
    <div className={`${isDarkMode ? "dark" : null}`}>
      <div className='dark:bg-gray-900'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FeedLayout />}>
              <Route index element={<Feeds />} />
              <Route path='explore' element={<Explore />}>
                <Route index element={<ExploreTrends />} />
                <Route path='tags' element={<ExploreTags />} />
              </Route>
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
