import React, { useState } from 'react'
import BookModal from '../Modal/Modal'
import './styles.css'

const Book = ({ book }) => {

    const [isModalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }
    
    const closeModal = () => {
        setModalOpen(false)
    }

    return (
   <div className="book-card">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={`book image`} />
        <div className='button-container'>
            <button onClick={openModal}>DETAILS</button>
            <a target='blank' href={book && book.volumeInfo.previewLink}>PREVIEW</a>
        </div>

        <span className='title'>{book && book.volumeInfo.title}</span>
        <span> {book && book.volumeInfo.authors}</span>
        <BookModal isOpen={isModalOpen} closeModal={closeModal} book={book} />
       </div>
    )
}

export default Book