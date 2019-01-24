//'use strict';
/* global, $, cuid  */

const Item = (function(){
  validateName: function(name) {
    if (name === '') {
      throw TypeError("Name does not exist");
    }
  };
  create: function(name) {
    return {
      name: name,
      id: cuid(),
      checked: false
    }
  }

  return {
    validateName: validateName,
    create: create
  };
}());

//Item.create('apples');