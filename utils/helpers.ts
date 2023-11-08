import axiosInstance from "./axios";

const getProfile = async () => {
  const config = {
    method: "GET",
    url: "/profile",
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  try {
    const response = await axiosInstance(config);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getProfile };
