const element = document.getElementById("wrapper")
console.log(element)

console.log(element.innerHTML);  //Retrieves or sets the HTML markup within an element. Includes HTML tags in the result.
console.log(element.textContent); //Retrieves or sets the text content of an element,including descendants, hidden includes. 
console.log(element.innerText); //Retrieves or sets the visible text within an element, considering CSS styles.

const result = document.getElementsByClassName("car");  //Return Array like a structure not a exact Array .
console.log(result);

console.log(result[3]);        //access using Array 

art = result[3].innerText = "Kia"
console.log(art);

let result1 = document.querySelector("#wrapper")
console.log(result1)

let result2 = document.querySelectorAll(".car")
console.log(result2)