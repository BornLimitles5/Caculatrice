document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("h1");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  tbody.className = ("pfiou")
  const header = document.createElement('header');

  

  // and give it some content
  const newContent = document.createTextNode("Coucou");


  // add the text node to the newly created div
//   newDiv.appendChild(newContent);
  header.appendChild(newDiv);
  //Selection de la balise>Donne attribut
  newDiv.appendChild(newContent);
  table.appendChild(tbody);

  


  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(table, currentDiv);
}