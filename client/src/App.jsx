import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SignIn from "./pages/sign-in";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import { useAuthUser } from "./hooks/useAuthUser";

const App = () => {
  const { authUser } = useAuthUser();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/sign-in" />}
        ></Route>
        <Route
          path="/sign-in"
          element={authUser ? <Navigate to="/" /> : <SignIn />}
        ></Route>
        <Route
          path="/sign-up"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
