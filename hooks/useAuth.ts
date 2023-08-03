import { useState, useEffect } from "react";

import axios from "axios";

const useAuth = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const submitRequest = async (payload: any, endpoint: string) => {
    const config = {
      url: endpoint,
      data: payload,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      setLoading(true);
      const response = await axios(config);
      console.log(response.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      setData(response.data);
    } catch (error: any) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, submitRequest };
};

export { useAuth };
