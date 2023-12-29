import React from 'react'
import './styles.css'
import Book from '../Book/Book'
import useBook from '../../contexts/BookContext'

const Books = () => {

    const { book } = useBook()
  return (
    <div className='book-container'>
        {
            book &&
            book.map((item) => (
                <div className='book' key={item.id}>
                    <Book book={item} />
                </div>
            ))
        }
    </div>
  )
}

export default Books