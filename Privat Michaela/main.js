 // En clickfunktion som tar värdet i todo-input och skapa en <li> med värdet i.
 function listAppend(){
    // Hämta värdet från input-fältet
    let inputValue = document.querySelector("#todo-input").value;
// console.log(inputValue);

// Skapa en variabel (låda) som vi stoppar ett <li>-element i.
// Vi måste också skapa <li>-elementet.
let newLi = document.createElement('li');
// Skapar en variabel som är en createTextNode med värdet inputValue
let newTextNode = document.createTextNode(inputValue);
// Stoppar in newTextNode i newLi
newLi.appendChild(newTextNode);

// Stoppar in vårt <ul>-element i variabeln list
let list = document.querySelector('ul');
// Stoppa in newLi i list
list.appendChild(newLi);
/*
  HTML:
  <ul>
       <li>
        Vår text
        </li>
  <ul>

  Javascript:
  list -> li -> textNode
*/
}