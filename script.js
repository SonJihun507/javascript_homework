document.getElementById("container").addEventListener("click", function (event) {
    if(event.target === document.querySelector(".box")) {
       document.querySelector(".box").classList.add("clicked");
    }
    
    
})


function getSquare(number) {
    // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
    let answer = 0;
    answer = number*number;
    return answer
  }; 

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)