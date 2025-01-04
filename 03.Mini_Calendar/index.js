const date = new Date();

// Get elements from the DOM
const monthName = document.querySelector(".month");
const dayName = document.querySelector(".day");
const dateName = document.querySelector(".date");
const yearName = document.querySelector(".year");

// Set the text content of each element
monthName.innerText = date.toLocaleString("en", {
  month: "long",
});

dayName.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dateName.innerText = date.getDate();

yearName.innerText = date.getFullYear();


const btn = document.querySelectorAll("button");

const result = document.getElementById("result")
console.log(result);

for(let i=0; i<btn.length; i++){
btn[i].addEventListener("click", () => {
  const btnValue = btn[i].textContent;
  if(btnValue == "C"){
    clearResult();
  }
  else if (btnValue == "=" ){
    calculateResult();
  }
  else{
    appendValue(btnValue);
  }

});
function clearResult(){
  result.value = " ";
}

function appendValue(btnValue){
  result.value += btnValue; 
}
function calculateResult(){
  result.value  = eval(result.value);
}
}
