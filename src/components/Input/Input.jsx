import { CurrentInput } from './Input.styled';

export default function Input({type, name, patern,title,required, onChange}) {
  return(
    <label>{name}
      <CurrentInput
        type={type}
        name={name}
        pattern={patern}
        title={title}
        required={required}
        onChange={onChange}
      />
    </label>
  )
    
}
