import axios from "axios";
export const register = async (username, email, password) => {
  try {
    const response = await axios.post("http://localhost:6005/register", {
      username,
      email,
      password,
    });
    console.log("registered successfully");
    const result = response.data.result;
    return result;
  } catch (error) {
    console.log("error during registration", error.message);
    return new Error("registration failed");
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:6005/login", {
      email,
      password,
    });
    const token = response.data.token;
    return token;
  } catch (error) {
    console.log("error during Login", error.message);
    return new Error("Login failed");
  }
};
