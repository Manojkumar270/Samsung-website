import React from "react";
import "./Register.css";
import { register } from "./auth";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { username, email, password };
    console.log(formData);
    form.reset();
    try {
      const reg = await register(
        formData.username,
        formData.email,
        formData.password
      );
      console.log(reg);
    } catch (error) {
      console.log(error.messege);
    }
  };
  return (
    <>
      <div class="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>UserName</label>
          <input type="text" placeholder="Username" name="username" />
          <label>Email</label>
          <input type="text" placeholder="email" name="email" />
          <label>Password</label>
          <input type="text" placeholder="Password" name="password" />
          <button type="submit">Register</button>
          <p>
            Already have an account please <a href="/login">login</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
