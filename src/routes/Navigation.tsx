import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import reactLogo from "../assets/react.svg";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazy-load/pages";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={reactLogo} alt="react-logo" />

          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shoppin Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                LazyPage2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                LazyPage3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lazy1" element={<ShoppingPage />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/lazy1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
