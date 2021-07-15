import { ContactItem } from './ContactListItem.styled';
import Button from '../Button/Button';

export default function ContactListItem({name, number, deleteContact}) {
    return (
        <ContactItem>
            {name} : {number}
            <Button type="button" text='delete' onClick={deleteContact}/>
        </ContactItem>
    )
}