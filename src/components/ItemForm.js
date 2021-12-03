import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [foodItem, setFoodItem] = useState("") 
  const [category, setCategory] = useState("")

  function handleFoodChange(e){
    setFoodItem(e.target.value );
  }
  function handleCategoryChange(e){
    setCategory(e.target.value );
  }

  function handleSubmit(event){
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: foodItem,
      category: category
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={foodItem} onChange={handleFoodChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
