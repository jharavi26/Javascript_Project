const monthName = document.querySelector(".month") 
const dayName = document.querySelector(".day")
const dateName = document.querySelector(".date")
const yearName = document.querySelector(".year")
console.log(dateName);

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
  month:"long",
});

dayName.innerText = date.toLocaleString("en", {
  weekday:"long",
});

dateName.innerText = date.getDate();

yearName.innerText = date.getFullYear();

