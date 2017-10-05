'use strict';

//Liður 1
var x = document.getElementsByTagName("div")[0];
x.setAttribute("class","active");

//Liður 2
var x = document.getElementsByTagName("div")[2];
x.remove(x);

//liður 3
var itemTwo = document.getElementById('two');
var Textedit  = itemTwo.firstChild.nodeValue;
Textedit = Textedit.replace('Gunnar', 'Jacob');
itemTwo.firstChild.nodeValue = Textedit;

//Liður 4
var z = document.getElementById('Jon');
z = document.getElementById('Jon').getAttribute('one');
//liður 5
//Munurinn er að DOM manipulation er serverside og er ósýnilegt frá client hliðinni
//allt html stuff er hægt að sjá í gegnum browser clienta.

