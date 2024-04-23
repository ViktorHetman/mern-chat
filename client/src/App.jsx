import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SignIn from "./pages/sign-in";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
