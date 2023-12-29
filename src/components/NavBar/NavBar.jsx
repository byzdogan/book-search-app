import { useState } from 'react'
import useBook from '../../contexts/BookContext'
import './styles.css'

function NavBar() {

    const {  search, setSearch, getBooks } = useBook()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await getBooks()
    }

    return (
            <nav>
            <h1>Google Book Search App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="search"
                    name="search"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    required
                />
            </form>
            </nav>
    )
}

export default NavBar