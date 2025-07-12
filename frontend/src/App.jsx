// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowsePage from './pages/BrowsePage';
import Login from './pages/Auth/Login';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './pages/Profile';
function App() {
  return (
    <AuthProvider> {/* Wrap everything with AuthProvider */}
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;