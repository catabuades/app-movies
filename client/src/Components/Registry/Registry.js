import './base.scss';
import React from 'react'
import FormAccount from '../FormAccount/FormAccount'

function Registry() {
  return (
    <>
      <div className="FormWrapper">
        <FormAccount mode="registry"></FormAccount>
      </div>
    </>
  );
}

export default Registry;
