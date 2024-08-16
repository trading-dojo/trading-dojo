import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import { AuthProvider, useAuth } from "./context/AutenticacaoContexto";
import Lessons from "./pages/Lessons";
import TermsAndConditions from "./pages/terms-and-conditions";
import ContactUs from "./components/ContactUs";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router >
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route path="/lessons" element={<Lessons />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;