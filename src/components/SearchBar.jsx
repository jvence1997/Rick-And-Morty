import { useState } from "react";

const SearchBar = ({ onSearch }) => {

   const [id, setId] = useState('');
   const handleChange = (event) => {
      const valor = event.target.value;
      setId(valor)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={()=>{onSearch(id)}}>agregar</button>
      </div>
   );
}

export default SearchBar;
