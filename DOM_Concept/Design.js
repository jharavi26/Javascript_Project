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



//Accessing Attribute in Dom 

let ele = document.getElementById("img")        // Checking if an Attribute Exists
console.log(ele)
let srcAtt = ele.getAttribute("src")            //To access the value of an attribute,
console.log(srcAtt);

ele.setAttribute("class","main")
let srcAt = ele.getAttribute("class")          //To set or update an attribute,
console.log(srcAt)

let has = ele.hasAttribute("alt")            // Checking if an Attribute Exists , True 
console.log(has)

let rta = ele.removeAttribute("alt")           //To remove an attribute,
let has1 = ele.hasAttribute("alt")            // False
console.log(has1)

//Create a Element 

let btn = document.getElementById("art");
console.log(btn);

function fun(){
  let para = document.createElement("p")
  console.log(para);
  para.textContent = "This is a new Paragraph"
  element.appendChild(para)
}


