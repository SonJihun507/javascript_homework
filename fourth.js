//문제1
let personalInfo = [{이름:"철수", 나이:"19", 성별:"남"},{이름:"짱구", 나이:"20", 성별:"남"},{이름:"유리", 나이:"21", 성별:"여"}];

console.log(personalInfo);

const personCard = document.querySelector(".person");
const names = document.querySelectorAll(".이름");
const ages = document.querySelectorAll(".나이");
const genders = document.querySelectorAll(".성별");


//문제2
personalInfo.forEach(function(info) {
    let templete = `<div class = "info">
                <h2 class= "name">${info.이름}</h3>
                <h3 class= "age">${info.나이}</h3>
                <h3 class= "gender">${info.성별}</h3>
                </div>`;
    personCard.insertAdjacentHTML("beforeEnd", templete);

})

//문제3
const findGender = personalInfo.find((info) => {
    if(info.성별 === "여") {
        return info.이름;
    };
});


console.log(findGender);

//문제4
const filterGender = personalInfo.filter((info) => {
    return info.성별 === "남";
});

console.log(filterGender); 

//문제5
const after10year = personalInfo.map((info) => {
        return {이름:info.이름, 나이:Number((info.나이)) + 10, 성별:info.성별}
        });

console.log(personalInfo);    
console.log(after10year);

//문제6
let personalInfo2 = [...personalInfo]

personalInfo2.sort((a,b) => {
    return b.나이 - a.나이;
});



console.log(personalInfo);
console.log(personalInfo2);

//문제7
const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
};

const {이름, 나이, 주소 } = user;

console.log(이름) // "병수"
console.log(나이) // "20"
console.log(주소) // "시골"