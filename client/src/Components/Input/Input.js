import './base.scss';

function Input({ type, inputName, label, extraClasses = "" }) {
  return (
    /* El return solo puede devoler un solo elemento wrappeado, si no ponemos un div, hay que poner los tags "fragmented" */
    <>
      <label for={inputName}>{label}</label>
      <input type={type} id={inputName} name={inputName} className={`Input ${extraClasses}`} />
    </>
  );
}

export default Input;
