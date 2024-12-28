import { Route, Routes, useRoutes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";

import MainFooter from "./components/MainFooter";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About/About";
import Student from "./pages/Student/Student";
import Profile from "./pages/Student/children/Profile/Profile";
import Course from "./pages/Student/children/Course/Course";
import Courses from "./pages/Student/children/Courses/Courses";
import StudentLayout from "./layouts/StudentLayout";
import MainLayout from "./layouts/MainLayout";
import Counter from "./pages/Counter/Counter";
import Products from "./pages/Products/Products";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  const routes = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/student",
          children: [
            {
              element: <StudentLayout />,
              children: [
                {
                  path: "",
                  element: <Student />, // /student
                },
                {
                  path: "profile",
                  element: <Profile />, // /student/profile
                },
                {
                  path: "courses",
                  element: <Courses />, // /student/profile
                },
              ],
            },
            {
              path: "course/:courseId",
              element: <Course />, // /student/profile
            },
          ],
        },
        {
          path: "/counter",
          element: <Counter />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/*",
          element: <Error404 />,
        },
      ],
    },
  ]);

  return routes;

  // return <MainLayout>
  //   {routes}
  // </MainLayout>;
}

export default App;
