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
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login">
        <div className="loginCentro">
          <label className="titleEmail">Email</label>
          <input 
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          <div className="password">
            <label className="titlePassword">Password</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              })}
            />
          </div>
          <button className="btnLogin">Login</button>
        </div>
      </div>
    </form>
  );
};
