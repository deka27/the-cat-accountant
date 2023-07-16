import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/users/login", {
        email,
        password
      });

      const json = response.data;
      toast.success("Login successful", {duration: 5000});
      

      // Save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // Update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
      toast.error(error.response.data.error, {duration: 5000});
    
    }
  };

  return { login, isLoading, error };
};
