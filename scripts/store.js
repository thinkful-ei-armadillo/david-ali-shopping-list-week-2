'use strict';
/* global $, cuid, Item */

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    return store.items.find(element => element.id === id);
  };
  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
      shoppingList.render();
    } catch(err) {
      console.log(`${name}: Cannot add this, ${err.message}`);
    }
  }
  const findAndToggleChecked = function(id) {
    this.findById(id).checked = !(this.findById(id).checked);
  }

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
      shoppingList.render();
    } catch(err) {
      console.log(`${name}: Cannot update this name: ${err.message}`)
    }
  
  const findAndDelete = function(id) {
    this.items = this.items.filter(element => element.id !== id);
  }  

  }


  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById: findById,
    addItem: addItem,
    findAndToggleChecked: findAndToggleChecked,
    findAndUpdateName: findAndUpdateName,
    findAndDelete: findAndDelete
  };
}() );
