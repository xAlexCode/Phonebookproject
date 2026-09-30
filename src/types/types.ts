export type Contact = {
  id: number
  name: string
  phone: string
  type: 'personal' | 'business' // a union: only these two values are allowed
  isFavorite: boolean
}

export type Filter = 'All' | 'Personal' | 'Business' | 'Favorites'
