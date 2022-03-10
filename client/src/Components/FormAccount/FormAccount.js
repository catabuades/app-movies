import './base.scss';
import Button from '../Button/Button'
import Input from '../Input/Input'
import React, { useState } from 'react'
import { useAuthenticator } from "../../Contexts/AuthenticatorProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { loginMethod, registerMethod } from "../../Services/authService"

function FormAccount({ mode }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthenticator();
  const navigate = useNavigate();
  // 2) const location
  const location = useLocation();
  // 3) guardamos el path si venimos del require auth o sino vamos a la home
  const from = location.state?.from.pathname || "/";

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    if (mode === "registry") {
      if (username === "" || email === "" || password === "") return

      const data = {
        name: username,
        email: email,
        password: password
      }
      const response = await registerMethod(data)

      login(response);
      // 4) Redireccionamos al from no solamente a la home con "/"
      navigate(from, { replace: true });
    }
    if (mode === "login") {
      if (email === "" || password === "") return
      
      const data = {
        email: email,
        password: password
      }

      const response = await loginMethod(data)

      login(response);
      // 4) Redireccionamos al from no solamente a la home con "/"
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <form className="FormAccount">
        {mode === "registry" && (
          <div className="FormAccount__input">
            <Input type="text" inputName="name" label="Name:" value={username} onChange={handleUsernameChange} />
          </div>
        )}
        <div className="FormAccount__input">
          <Input type="email" inputName="email" label="Email:" value={email} onChange={handleEmailChange}/>
        </div>
        <div className="FormAccount__input">
          <Input type="password" inputName="password" label="Password:" value={password} onChange={handlePasswordChange} />
        </div>
        <Button type="button" onClick={handleButtonClick}>
          {mode === "registry" && ("Registry")}
          {mode === "login" && ("Login")}
        </Button>
      </form>
    </>
  );
}

export default FormAccount;
