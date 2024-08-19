import LogIn from "./pages/LogIn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
export default function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={authUser ? <Home /> : <Navigate to={"log-in"} />}
          />
          <Route
            exact
            path="/log-in"
            element={authUser ? <Navigate to={"/"} /> : <LogIn />}
          />
          <Route
            exact
            path="/sign-up"
            element={authUser ? <Navigate to={"/"} /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}
