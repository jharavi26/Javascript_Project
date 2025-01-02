// Steps to Rember Project Implementation :-
// Assign birthdayValue into a variable.
// Minus current day from the Variable. 

const btnE1 = document.getElementById("btn");
const birthdayE1 = document.querySelector("#birthday");
const resultE1 = document.getElementById('result');

function CalculateAge(){
  const birthdayValue = birthdayE1.value;
  if(birthdayValue === ""){
    alert("Please Enter your Date of Birth")
  }
  else {
    const age = getAge(birthdayValue);
    resultE1.innerText = `Your Age is ${age} ${age>1 ? "years" : "year"} old `;
  }
}

function getAge(birthdayValue){
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear()- birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  return age;

  if(month < 0 || 
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--
  }

}


btnE1.addEventListener("click", CalculateAge);

// birthdayE1.value ="1998-01-26";
// console.log(birthdayE1.value);
