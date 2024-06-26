import React from "react";
import toast from "react-hot-toast";

import { useAuthUser } from "./useAuthUser";

export const useSignup = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthUser();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

const handleInputErrors = ({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
