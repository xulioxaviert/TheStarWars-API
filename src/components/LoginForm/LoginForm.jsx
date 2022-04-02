import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/contexts/JwtContext";
import { API } from "../../shared/services/api";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const onSubmit = (formData) => {
    API.post("users/login", formData).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data);
      setJwt(res.data);
      navigate("/home");
    });

    //console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
        })}
      />
      <button>Login</button>
    </form>
  );
};
