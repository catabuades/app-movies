import './base.scss';
import Button from '../Button/Button'
import Input from '../Input/Input'

function FormAccount() {
  return (
    <form className="FormAccount">
      <div className="FormAccount__input">
        <Input type="text" inputName="name" label="Name:"></Input>
      </div>
      <div className="FormAccount__input">
        <Input type="email" inputName="email" label="Email:"></Input>
      </div>
      <div className="FormAccount__input">
        <Input type="password" inputName="password" label="Password:"></Input>
      </div>
      <Button type="submit">Registry</Button>
    </form>
  );
}

export default FormAccount;
