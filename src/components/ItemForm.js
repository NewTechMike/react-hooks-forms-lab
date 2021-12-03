import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, itemName, itemCategory}) {

  return (
    <form className="NewItem" >
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={onItemFormSubmit}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={onItemFormSubmit}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={onItemFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
