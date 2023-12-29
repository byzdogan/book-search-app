import Modal from 'react-modal'
import './styles.css'

const BookModal = ({ isOpen, closeModal, book }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Book Preview Modal'
    >
        {   book && (
              <div className='book-modal'>
                  <div className="top">
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                      <button className='close-button' onClick={closeModal}>Close</button>
                  </div>
                  <h2 className='title'>{book.volumeInfo.title}</h2>
                  <h4> {book.volumeInfo.authors}</h4>
                  <p>{book.volumeInfo.description}</p>
              </div>)
        }
    </Modal>
  )
}

export default BookModal