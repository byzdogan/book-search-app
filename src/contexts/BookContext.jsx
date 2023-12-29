import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const BookContext = createContext()

export const BookProvider = ({ children }) => {

    const [search, setSearch] = useState('software')
    const [book, setBook] = useState('')

  const getBooks = async () => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
        )
        console.log(response)
        setBook(response.data.items || [])
    } catch (e) {
        console.error(e)
    }}

  const values = {
    book,
    search,
    setSearch,
    getBooks
  }

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>
}

const useBook = () => useContext(BookContext)
export default useBook