import './base.scss';
import Button from '../Button/Button'
import Input from '../Input/Input'
import React, { useState } from 'react'
import { useAuthenticator } from "../../Contexts/AuthenticatorProvider";
import { useNavigate, useLocation } from "react-router-dom";

function FormAccount({ mode }) {
  const [username, setUsername] = useState("");
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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (username && password) {
      login(username);
      // 4) Redireccionamos al from no solamente a la home con "/"
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <form className="FormAccount">
        <div className="FormAccount__input">
          <Input type="text" inputName="name" label="Username:" value={username} onChange={handleUsernameChange} />
        </div>
        {mode === "registry" && (
          <div className="FormAccount__input">
            <Input type="email" inputName="email" label="Email:" />
          </div>
        )}
        <div className="FormAccount__input">
          <Input type="password" inputName="password" label="Password:" value={password} onChange={handlePasswordChange} />
        </div>
        <Button type="button" onClick={handleLoginClick}>
          {mode === "registry" && ("Registry")}
          {mode === "login" && ("Login")}
        </Button>
      </form>
    </>
  );
}

export default FormAccount;
