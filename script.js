const changeText = function () {
    document.querySelector(".title").innerHTML = "제목아니다"
}

document.querySelector(".btn").addEventListener("click", changeText);


    
    
const sum = function () {
    let anwser = 0;
    num1= 1;
    num2= 3;
    anwser = num1+num2;
    console.log(anwser)
}
sum();

const isEvenOrOdd = function(num) {
    num = 4
    if (num % 2 == 0) {
        alert("짝수입니다.")
    }else {
        alert("홀수입니다.")
    }
} 
isEvenOrOdd();

const profile = {이름: "병수", 나이: 20}

console.log(profile);