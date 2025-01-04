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

