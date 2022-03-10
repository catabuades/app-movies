import './base.scss';

function Input({ type, inputName, value, onChange, label, extraClasses = "" }) {
  return (
    /* El return solo puede devoler un solo elemento wrappeado, si no ponemos un div, hay que poner los tags "fragmented" */
    <>
      <div className={`Input ${extraClasses}`}>
        <label htmlFor={inputName}>{label}</label>
        <input type={type} id={inputName} name={inputName} value={value} onChange={onChange} />
      </div>
    </>
  );
}

export default Input;
