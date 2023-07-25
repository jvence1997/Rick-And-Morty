const SearchBar = ({onSearch}) => {
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>buscar</button>
      </div>
   );
}

export default SearchBar;
