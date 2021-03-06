'use strict';
/* global, $, cuid  */

const Item = (function(){
  const validateName = function(name) {
    if (name === '') {
      throw TypeError('Name does not exist');
    }
  };
  const create = function(name) {
    return {
      name: name,
      id: cuid(),
      checked: false
    };
  };

  return {
    validateName: validateName,
    create: create
  };
}());