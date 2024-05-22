//문제8

localStorage.setItem("user", JSON.stringify({ name: "병수", age: 20, 주소: "시골", }));

console.log(JSON.parse(localStorage.getItem("user")));

localStorage.setItem("user", JSON.stringify({ name: "병수", age: 30, 주소: "시골", }));

console.log(JSON.parse(localStorage.getItem("user")));

localStorage.removeItem("user")

console.log(JSON.parse(localStorage.getItem("user")))

//문제1

fetch("https://jsonplaceholder.typicode.com/posts") 
	.then((res) => res.json())
	.then((data) => console.log(data))