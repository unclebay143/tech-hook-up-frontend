import "./App.css";
import { FeedLayout } from "./components/layout/FeedLayout";
import Feeds from "./pages/feeds";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { ExploreTrends } from "./pages/explore/trends/ExploreTrends";
import AppContext from "./helper/context/appContext/appContext";
import { ExploreTags } from "./pages/explore/tags/ExploreTags";
import { Explore } from "./pages/explore/Explore";
import { Toaster } from "react-hot-toast";
import { OnboardingStepper } from "./pages/signup/onboarding/OnboardingStepper";

function App() {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={`${isDarkMode ? "dark" : null}`}>
      <div className='dark:bg-gray-900'>
        <Toaster />
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
            <Route path='onboard' element={<OnboardingStepper />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
