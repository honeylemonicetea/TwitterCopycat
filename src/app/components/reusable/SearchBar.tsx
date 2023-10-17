import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='searchbar'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchbar__icon'/>
        <input type="text" className='searchbar__input' placeholder='Search' />
    </div>
  )
}

export default SearchBar