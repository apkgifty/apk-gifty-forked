"use client";

import { useState, useEffect } from "react";

// import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetch = async () => {
    //   try {
    //     setLoading(true);

    //     const result = await axios.post("/api/register", {
    //       firstname: "Jake",
    //       lastname: "Sims",
    //       email: "janod@hhsjh.com",
    //       password: "1234",
    //       password_confirmation: "1234",
    //     });

    //     setData(result.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetch();

    const axios = require("axios");
    const FormData = require("form-data");
    let data = new FormData();
    data.append("password_confirmation", "1234");
    data.append("firstname", "james");
    data.append("lastname", "atkins");
    data.append("email", "lelimodfb452@zixu.com");
    data.append("password", "1234");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://backend.apkxchange.com/api/register",
      headers: {
        Accept: "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return { data, error, loading };
};

export { useFetch };
