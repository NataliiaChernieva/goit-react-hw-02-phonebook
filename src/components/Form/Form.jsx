import React from "react";
import { CustomForm } from './Form.styled';
import Button from '../Button/Button';
import Input from '../Input/Input'

export default function Form({ onSubmit, text, onChange }) {
    return (
        <CustomForm onSubmit={onSubmit}>
            <Input type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={onChange}
            />
            <Button type="submit" text={text}/>
        </CustomForm>
    )
}
