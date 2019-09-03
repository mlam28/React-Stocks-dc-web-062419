import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name='radio-alphabetically' value="Alphabetically" checked={props.settings.alphabetically} onClick={props.onAlphabet}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name='radio=alphabetically' value="Price"  checked={props.settings.price} onClick={props.onPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.onFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
