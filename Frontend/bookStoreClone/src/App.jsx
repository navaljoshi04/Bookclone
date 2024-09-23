import React from "react";
import Home from "./home/Home";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Abouts from "./components/about/Abouts";
import Contacts from "./components/contact/Contacts";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        >
          {" "}
        </Route>
        <Route path="/signup" element={<Signup />}>
          {" "}
        </Route>
        <Route path="/about" element={<Abouts />}>
          {" "}
        </Route>
        <Route path="/contact" element={<Contacts />}>
          {" "}
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
