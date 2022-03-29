import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'
import {useState} from 'react'

const Searchbar = () => {
    const {term, handleSearch} = useContext(SearchContext)

    return(
       <form>
           <input ref={term} type='text' placeholder="Enter search term" />
           <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
       </form>
    )
}

export default Searchbar