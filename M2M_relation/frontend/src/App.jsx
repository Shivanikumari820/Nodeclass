import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AddMore from "./pages/AddMore"; // 👈 ye import zaroori hai

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/addmore/:id" element={<AddMore />} /> {/* 👈 yeh naya path */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
