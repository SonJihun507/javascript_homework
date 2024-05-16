const counter = document.querySelector(".counter");

let countNumber  = Number(counter);

const counterPage = setInterval(() => {
    if (countNumber < 5) {
        countNumber = countNumber + 1;
      countNumber.textContent = counter;
    } else if (countNumber === 5) { 
      console.log("종료")
      clearInterval(counterPage);
    }
  }, 1000);