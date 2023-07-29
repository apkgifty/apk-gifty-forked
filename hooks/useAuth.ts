import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const submitRequest = async (payload: any, url: string) => {
    const config = {
      url: url,
      data: payload,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const response = await axios(config);
      setData(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, submitRequest };
};

export { useAuth };
