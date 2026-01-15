import {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  if (onSearch){
    onSearch(searchText);
  }
  };

  return (
    <div>
      <form className='search-form' onSubmit = {handleSearch}>
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
