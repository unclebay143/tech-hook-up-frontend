import "./App.css";
import { FeedLayout } from "./components/layout/FeedLayout";
import Feeds from "./pages/feeds";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./context/appContext/appContext";
import Solution from "./pages/MoralisTest";

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
        <div className=''>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<FeedLayout />}>
                <Route index element={<Feeds />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
