import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from 'axios';
import toast from "react-hot-toast";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (firstname, lastname, email, password) => {
    setIsLoading(true);
    setError(null);

    try {

      const requestData = {
        firstname,
        lastname,
        email,
        password
      };

      console.log('Request Data:', requestData);

      const response = await axios.post("/api/users/signup", requestData );
      const json = response.data;
      toast.success("Signup successful!", {duration: 5000});

      // Save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // Update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return { signup, isLoading, error };
};

