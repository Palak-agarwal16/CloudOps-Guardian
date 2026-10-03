import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Incidents from "./pages/Incidents";
import Monitoring from "./pages/Monitoring";
import Remediation from "./pages/Remediation";
import History from "./pages/History";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Sidebar />

        <div className="main">

          <Navbar />

          <main className="content">
            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route
                path="/resources"
                element={<Resources />}
              />

              <Route
                path="/incidents"
                element={<Incidents />}
              />

              <Route
                path="/monitoring"
                element={<Monitoring />}
              />

              <Route
                path="/remediation"
                element={<Remediation />}
              />

              <Route
                path="/history"
                element={<History />}
              />

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/signup"
                element={<Signup />}
              />

            </Routes>
          </main>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;