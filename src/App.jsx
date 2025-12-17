import './App.css';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import "./components/style/Base.css";
import "./components/style/Responsive.css";
import AuthProvider from "./components/context/Auth/AuthProvider";
import ThemeProvider from './components/context/Theme/ThemeProvider';
import CartProvider from './components/context/Cart/CartProvider';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Pages/RoleRoutesPages/Login";
import Dashboard from "./components/Pages/RoleRoutesPages/Dashboard";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes/ProtectedRoutes";
import Profile from "./components/Pages/RoleRoutesPages/Profile";
import RoleRoutes from "./components/Pages/RoleRoutesPages/RoleRoutes";
import Admin from "./components/Pages/RoleRoutesPages/Admin";
import Name from './components/Test/Name/Name';
import Total from './components/Test/Total';
import Parent from './components/Test/DataChange/Parent';

function App() {

  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            {/* Header Section */}
            <Header />
            {/* Main Section */}
            <main className="main-section pt-[3rem]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/dashboard' element={
                  <ProtectedRoutes>
                    <Dashboard />
                  </ProtectedRoutes>
                }
                />
                <Route path='/profile' element={
                  <RoleRoutes allowedRoles={["user", "admin"]}>
                    <Profile />
                  </RoleRoutes>
                }
                />
                <Route path='/admin' element={
                  <RoleRoutes allowedRoles={["admin"]}>
                    <Admin />
                  </RoleRoutes>
                }
                />
              </Routes>
            </main>
            {/* Footer Section */}
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
      <Name />
      <Parent />

      {/* <Total /> */}
    </>
  )
}

export default App
