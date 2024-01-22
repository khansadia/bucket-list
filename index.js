const list = document.querySelector('.list');

// Create a <p> using the createElement 

const FirstP = document.createElement('p');
FirstP.innerText = "I want to be a Developer";
list.appendChild(FirstP);

// 2  afterbegin,afterend,beforebegin,beforeend
const SecondP = document.createElement('p');
SecondP.innerText = "Let start with learning Frontend tools";
list.insertAdjacentElement('afterend',SecondP);

// 3 
console.log(list.innerHTML);

//4  Now create that string that contains a new item that you want to add to your bucket list.using "<div>This is a div element as a string</div>";

const ThirdP = "<p>Working with HTML</p>";
//list.innerHTML = ThirdP;

//5  
// it will replace all the elements contain

// 6:
//list.insertAdjacentElement("afterbegin",ThirdP);

// 7 :Add three more items to the end of list, but try and do it with a loop instead.
/* const addNewP = (newP) => {
    list.innerHTML +=` <p> ${newP}</p>`
}
addNewP("No 1 HTML");
addNewP("No 2 CSS");
addNewP("No 3 JAVASCRIPT"); */

const arrayP = ["No 1 HTML","No 2 CSS", "No 3 JAVASCRIPT" ];

for (let x = 0; x < arrayP.length; x++){
    let newP = `<p>${arrayP[x]}</p>`
    list.innerHTML += newP;
}

//8.. How many items do you have in your bucket list now? Log it to the console. Use the children property.
console.log(list.children.length);
// 5 children

//9....Change the content of the h2 at the to top of the HTML document
const owner = document.querySelector('.owner');
owner.innerText = 'Sadia Khan';
//10 Replace the first item in your list with a new item. There are several ways to do this, but try the replaceChild method out.
const newElement = document.createElement('p');
newElement.innerText = "Learning is my hobby";
list.replaceChild(newElement, list.firstChild);

//11: Now try replace an element in the middle of the list to a new one. Use the same method as before or get creative
const middleNewElelment = document.createElement('p');
middleNewElelment.innerText = "A website without visitors is like a ship lost in the horizon.";
list.children[3].parentNode.replaceChild(middleNewElelment, list.children[3]);

//12: Remove the last element in the list. lastChildElement combine with the removeChild method might work.
list.removeChild(list.lastElementChild);
/* ...... //  Some extra functions  ,firstElementChild
//This property returns the first node that is of type element.

//const section = document.querySelector(".parent");
//console.log(list.firstElementChild);

// LastElementChild
//const section = document.querySelector(".parent");
//console.log(list.lastElementChild); 

.......*/

