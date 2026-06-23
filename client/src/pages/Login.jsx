import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(formData);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-4 w-[350px]"
      >

        <h1 className="text-3xl font-bold text-center mb-4">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-3 rounded-xl outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-3 rounded-xl outline-none"
        />

        <button
          type="submit"
          className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;