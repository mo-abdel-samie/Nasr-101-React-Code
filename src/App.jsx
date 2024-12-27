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
import StudentLayout from "./pages/Student/StudentLayout";

function App() {
  const routes = useRoutes([
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
      path: "/*",
      element: <Error404 />,
    },
  ]);

  return (
    <>
      <MainNavbar />
      {routes}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes> */}
      <MainFooter />
    </>
  );
}

export default App;
