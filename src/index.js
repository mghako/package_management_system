import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import DashboardHome from './Pages/Dashboard/DashboardHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<DashboardHome />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
