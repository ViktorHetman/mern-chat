import { useState } from "react";
import toast from "react-hot-toast";

<<<<<<< HEAD
import { useAuthUser } from "./useAuthUser";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthUser();
=======
import { useAuthContext } from "../context/auth-context";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
>>>>>>> dba5023dfe32e796978b5e83f7d231bc2b003cbf

  const login = async (userName, password) => {
    const success = handleInputErrors(userName, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
