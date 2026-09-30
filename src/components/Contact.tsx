import type { Contact } from '../types/types'


type ContactProps = {
  contact: Contact
  deleteContact: (id: number) => void
}

const ContactProfile = ({ contact, deleteContact }: ContactProps) => {
    let classes = contact.type;
    if (contact.isFavorite) {
    classes += " favorite";
    }
  return (
    <li className={classes}>
      <span className="contact-name">{contact.name}</span>
      <span className="contact-phone">{contact.phone}</span>
      <button onClick={() => deleteContact(contact.id)} 
      className="button">Delete</button>
    </li>
  )
}

export default ContactProfile
