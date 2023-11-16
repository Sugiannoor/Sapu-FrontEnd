import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./loginForm.css";
import { ButtonElement } from "../../../components/elements/button";
import InputElement from "../../../components/elements/input/InputElement";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Logic Ketika data Terkirim email dan Password
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleClearEmail = () => {
    setEmail("");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="position-relative mb-2 form-group has-icon-right">
          <InputElement
            type="text"
            name="email"
            placeholder="Masukkan email"
            value={email}
            onChange={handleChange}
            className="mb-3"
          />
          <span
            className="form-control-icon mx-2 pt-2"
            onClick={handleClearEmail}
          >
            <AiOutlineCloseCircle color="green" size={22} />
          </span>
        </div>

        <div className="form-group has-icon-right position-relative mb-1">
          <InputElement
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Masukkan password"
            value={password}
            onChange={handleChange}
          />
          <span
            className="form-control-icon mx-2 pt-2"
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <BsEye color="green" size={22} />
            ) : (
              <BsEyeSlash color="green" size={22} />
            )}
          </span>
        </div>
        <ButtonElement
          handleClick={handleSubmit}
          isLoading={false}
          type="submit"
          className="btn btn-success mt-5 w-100"
        >
          Login
        </ButtonElement>
      </form>
      <Link to= "/registrasi">
      <span className="d-flex justify-content-center mt-3">Belum Punya akun?</span>
      </Link>
    </>
  );
};

export default LoginForm;
