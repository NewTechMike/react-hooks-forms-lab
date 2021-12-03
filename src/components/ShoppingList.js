import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleSearchChange(event){   
    setSearch(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;
    return item.category === selectedCategory || item.name.includes(search); //item.name.includes(search)
  });
  
  const [foodItem, setFoodItem] = useState({
    id: "",
    name: "",
    category: "Produce",
  }) 

  function handleItemFormSubmit(event){
    event.preventDefault();
    
    const newName = event.target.name.value;
    const newCategory = selectedCategory; 
    
    setFoodItem({ 
      ...foodItem,
      name: newName,
      category: newCategory,
    });   
  }

  return (
    <div className="ShoppingList">
      <ItemForm    
      itemCategory={foodItem.category}
      itemName={foodItem.name}
      onItemFormSubmit={handleItemFormSubmit}/>

      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={search} 
      onSearchChange={handleSearchChange}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
