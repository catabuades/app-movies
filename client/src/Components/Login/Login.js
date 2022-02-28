import './base.scss';
import React from 'react'
import { Link } from "react-router-dom";
import FormAccount from '../FormAccount/FormAccount'

function Login() {
  return (
    <>
      <div className="FormWrapper">
        <FormAccount mode="login"></FormAccount>
        <p>OR</p>
        <Link to="/registry">REGISTRY</Link>
      </div>
    </>
  );
}

export default Login;
