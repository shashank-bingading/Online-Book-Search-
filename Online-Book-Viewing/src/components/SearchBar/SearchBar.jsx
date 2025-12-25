import React from 'react'
import {useState} from 'react'
const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  if (onSearch){
    onSearch(searchText);
  }
  };

  return (
    <div>
      <form className='search-form' onSubmit = {handleSeacrh}>
        <input 
          type="text" 
          placeholder="Search for books..." 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
        />
        <button type="submit" className='search-button'>Search</button>
      </form>
      
    </div>
  )
}

export default SearchBar
