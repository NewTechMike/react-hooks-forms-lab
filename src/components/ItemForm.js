import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({itemName, itemCategory, onItemDataChange}) {

  const [array, setArray] = useState({
    id: uuid(),
    name: itemName,
    category: itemCategory,
  })

  function onItemFormSubmit(event){
    event.preventDefault();
    const name = event.target.name.value;
    const category = event.target.category;
    console.log(name, category, event.target)
    setArray({
      ...array, 
      [name]: category,
    });
    console.log("array: ", array)
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={array.name}/>
      </label>

      <label>
        Category:
        <select name="category" value={array.category}>
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
