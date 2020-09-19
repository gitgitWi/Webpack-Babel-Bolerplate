import "./styles/main.scss";
import { person, sayHello } from "./lib";

let test = () => console.log(person.name);

test();

console.log(sayHello("Brad"));

async function getPosts() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	const data = await response.json();
	return data;
}

getPosts().then(console.log);
