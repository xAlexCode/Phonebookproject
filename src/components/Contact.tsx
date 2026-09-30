import type { Contact } from '../types/types'

// Beskriver vilka props komponenten tar emot
type ContactProps = {
  contact: Contact // Kontakten som ska visas
  deleteContact: (id: number) => void // Funktion för att ta bort en kontakt (skickas ner från föräldern)
}

const ContactProfile = ({ contact, deleteContact }: ContactProps) => { // 
    let classes = contact.type;

    // Om kontakten är favorit läggs klassen "favorite" till
    if (contact.isFavorite) {
    // OBS: mellanslaget före "favorite" behövs så klasserna inte klistras ihop
    classes += " favorite";
    }

  return (
    <li className={classes}>
      <span className="contact-name">{contact.name}</span>
      <span className="contact-phone">{contact.phone}</span>
      <button onClick={() => deleteContact(contact.id)} /* Vid klick anropas deleteContact med just den här kontaktens id. Pilfunktionen behövs, annars skulle funktionen köras direkt vid rendering */
      className="button">Delete</button>
    </li>
  )
}

export default ContactProfile
