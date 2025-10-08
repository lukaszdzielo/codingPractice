function randomIntBetween(min, max) {
	// min: 5, max: 10
	return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

console.log(randomIntBetween(1, 10));

function productDescription(string, productName, productPrice) {
	console.log("string:", string);
	console.log("productName:", productName);
	console.log("productPrice:", productPrice);
	return "This is a produt!";
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);
