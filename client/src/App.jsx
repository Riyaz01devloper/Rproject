import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/layout/layout";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Progress from "./pages/Progress";
// import Settings from "./pages/Settings";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  const [skills, setSkills] = useState([]);

  const deleteSkill = (skillId) => {
    setSkills(
      skills.filter((skill) => skill._id !== skillId)
    );
  };

  return (
    <Routes>

      {/* Public Routes */}
      <Route path="profile" element={<Profile />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        <Route
          path="dashboard"
          element={
            <Dashboard
              skills={skills}
              setSkills={setSkills}
            />
          }
        />

        <Route
          path="skills"
          element={
            <Skills
              skills={skills}
              onDelete={deleteSkill}
              setSkills={setSkills}
            />
          }
        />

        <Route
          path="progress"
          element={<Progress />}
        />

        {/* <Route
          path="settings"
          element={<Settings />}
        /> */}
      </Route>

    </Routes>
  );
}

export default App;