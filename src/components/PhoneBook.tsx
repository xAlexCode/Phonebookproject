import type { Contact } from '../types/types'

const initialContacts: Contact[] = [
  { id: 1, name: 'John Doe', phone: '123-456-7890', type: 'personal', isFavorite: false },
  { id: 2, name: 'Jane Smith', phone: '234-567-8901', type: 'business', isFavorite: false },
  { id: 3, name: 'Bob Johnson', phone: '345-678-9012', type: 'personal', isFavorite: true },
  { id: 4, name: 'Alice Brown', phone: '456-789-0123', type: 'business', isFavorite: false },
  { id: 5, name: 'Charlie Wilson', phone: '567-890-1234', type: 'personal', isFavorite: false },
]

const PhoneBook = () => {
  console.log(initialContacts)
  return <p>Start here!</p>
}

export default PhoneBook