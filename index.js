document.getElementsByClassName('body');
document.getElementById('body').style.backgroundColor = 'silver'
document.getElementById('title').style.color = 'green'
document.getElementById('title2').style.textTransform = 'uppercase'
document.getElementById('title3').style.textTransform = 'uppercase'

let fruit = document.getElementById('fruList');
let fruits = document.createElement('li');
fruits.textContent = 'Pepino';
fruit.appendChild(fruits);
let veggetableList = document.getElementById('vegList');
let newVeggetables = document.createElement('li');
newVeggetables.textContent = 'Cucumber';
veggetableList.appendChild(newVeggetables)
