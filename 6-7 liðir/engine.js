'use strict';

var pizzaname = document.createElement("div");
var node = document.createTextNode("Pizza with tons of pepperoni");
pizzaname.appendChild(node);
var element = document.getElementById('Pizza');
element.appendChild(pizzaname);



var size = document.createElement("div");
var node = document.createTextNode("L");
size.appendChild(node);
var element = document.getElementById('size');
element.appendChild(size);