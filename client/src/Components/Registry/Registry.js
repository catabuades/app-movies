import './base.scss'
import React from 'react'
import { Link } from "react-router-dom"
import FormAccount from '../FormAccount/FormAccount'

function Registry() {
  return (
    <>
      <div className="FormWrapper">
        <FormAccount mode="registry"></FormAccount>
        <p>OR</p>
        <Link to="/login">LOGIN</Link>
      </div>
    </>
  );
}

export default Registry;
