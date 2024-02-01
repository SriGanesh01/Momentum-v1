import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Profile from './pages/Profile';
import AttendanceManagement from './pages/AttendanceManagement';
import Aboutus from './pages/Aboutus';


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nopage" element={<NoPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AttendanceManagement" element={<AttendanceManagement/>} />
          <Route path="/Aboutus" element={<Aboutus />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}