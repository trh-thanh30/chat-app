import LogIn from "./pages/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/log-in" element={<LogIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
