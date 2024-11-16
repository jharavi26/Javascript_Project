const span = document.querySelector('.bold-and-big');
console.log(span.textContent);


const element =document.querySelectorAll('li');
console.log(element)
element.forEach((item) => {
    console.log(item.textContent);
  });

  function displayDateTime() {
    const now = new Date();

    // Format the date and time
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };

    const formattedDateTime = now.toLocaleString('en-US', options);

    // Display it in the <p> element
    document.getElementById('date-time').textContent = formattedDateTime;
  }

  // Call the function
  displayDateTime();

  const result = document.querySelectorAll("li")
  result.forEach((value, i) =>{
    if(i>1){
        value.style.backgroundColor = "red";
    }
    else{
        value.style.backgroundColor ="white";
    }
    })

const result1= document.querySelector("li");
result1.style.backgroundColor = "green";

const listItems = document.querySelectorAll('li');
const secondItem = listItems[1];                               // Index 1 for the second element
console.log(secondItem.textContent);
secondItem.style.backgroundColor = "Yellow";                         // Outputs: "Item 2"

const par = document.getElementsByTagName('p');
console.log(par);
for (const p of par) {
    p.style.backgroundColor = "blue";
  }

  function changeBackgroundColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let index = 0;

    setInterval(() => {
      const box = document.getElementsByClassName("bold-and-big");
      if (box.length > 0) {  

      box[0].style.backgroundColor = colors[index];
      box[1].style.backgroundColor = colors[index];
      index = (index + 1) % colors.length; 
      }// Cycle through colors
    }, 1000); // Change every 1 second
  }

  // Call the function to start changing the background
  changeBackgroundColor();
