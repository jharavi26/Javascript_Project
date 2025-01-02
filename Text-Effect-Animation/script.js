const containerE1 = document.querySelector(".container");
console.log(containerE1);

const careers = ["Youtuber", "Web-Developer", "AI Engineer" , "Phtographer"]

let careerIndex = 0;
let CharacterIndex = 0;

updateText();

function updateText (){
  CharacterIndex++;
  containerE1.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I"?"an": "a"} 
  ${careers[careerIndex].slice(0, CharacterIndex)}</h1>`;

if(CharacterIndex === careers[careerIndex].length){
  careerIndex++;
  CharacterIndex = 0;
}

if(careerIndex === careers.length){
  careerIndex = 0;
}
setTimeout(updateText, 200);
}