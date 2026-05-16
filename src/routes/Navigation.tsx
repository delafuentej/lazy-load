import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import reactLogo from "../assets/react.svg";
import {
  DynamicForm,
  RegisterPage,
  RegisterFormikPage,
  FormikBasicPage,
  FormikAbstract,
  FormikYupPage,
  FormikComponents,
} from "../03-forms/pages";
const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={reactLogo} alt="react-logo" />

          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic Page
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstract
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstract" element={<FormikAbstract />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/*" element={<Navigate to="/lazy1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
