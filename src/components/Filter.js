import React, {useState} from "react";


function Filter({ onCategoryChange, onSearchChange }) {

  const [search, setSearch] = useState("")
  
  function onSearchChange(event){
    if (event.target.value === "value"){
      console.log("Checking Value")
    }
    setSearch(event.target.value)
  } 

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        onChange={onSearchChange} 
        value = {search} 
        placeholder="Search..."
      />

      <select name="filter" search={search} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
