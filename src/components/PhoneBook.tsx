import type { Contact } from '../types/types'
import ContactProfile from './Contact'
import { useState } from 'react'

const initialContacts: Contact[] = [
  { id: 1, name: 'John Doe', phone: '123-456-7890', type: 'personal', isFavorite: false },
  { id: 2, name: 'Jane Smith', phone: '234-567-8901', type: 'business', isFavorite: false },
  { id: 3, name: 'Bob Johnson', phone: '345-678-9012', type: 'personal', isFavorite: true },
  { id: 4, name: 'Alice Brown', phone: '456-789-0123', type: 'business', isFavorite: false },
  { id: 5, name: 'Charlie Wilson', phone: '567-890-1234', type: 'personal', isFavorite: false },
  { id: 6, name: 'Diana Lee', phone: '678-901-2345', type: 'business', isFavorite: true },
]

const PhoneBook = () => {
    const [contacts, setContacts] = useState(initialContacts)
    const [filter, setFilter] = useState('All')
        
    const deleteContact = (id: number) => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }

    console.log(contacts)

    let filteredContacts = contacts;
    if (filter === "Personal") {
        filteredContacts = contacts.filter(contact => contact.type === "personal");
    } 
    
    if (filter === "Business") {
        filteredContacts = contacts.filter(contact => contact.type === "business");
    } 
    
    if (filter === "Favorites") {
        filteredContacts = contacts.filter(contact => contact.isFavorite);
    }
    return ( 
        <div>
            <button onClick={() => setFilter("All")}> All </button>
            <button onClick={() => setFilter("Personal")}> Personal</button>
            <button onClick={() => setFilter("Business")}> Business</button>
            <button onClick={() => setFilter("Favorites")}>Favorites</button>
            <ul className='ul'>
                {filteredContacts.map(contact => (
                <ContactProfile 
                    key={contact.id} 
                    contact={contact} 
                    deleteContact={deleteContact} 
                />
                ))}
            </ul>
        </div>
    )
}

export default PhoneBook