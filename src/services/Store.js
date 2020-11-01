import { atom } from 'recoil'

export const searchTerm = atom({
    key: 'searchTerm',
    default: ''
})
export const movies = atom({
    key: 'movies',
    default: null
})
export const hasSearchValue = atom({
    key: 'hasSearchValue',
    default: false
})
