import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoteDetails from "./components/NoteDetails";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute"; // Import the private route wrapper

const App = () => {
  return (
    <AuthProvider>
      {/* Wrap everything in the AuthProvider */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home /> {/* Protect the Home route */}
              </PrivateRoute>
            }
          />
          <Route
            path="/note/:id"
            element={
              <PrivateRoute>
                <NoteDetails /> {/* Protect the NoteDetails route */}
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
