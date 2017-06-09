function add (a,b) {
	return a + b;
}

console.log(add(1,3));
console.log(add(9,0));


var addStatement = (a,b) => {
	return a + b;
};

var addExpression = (a, b) =>  a + b;

console.log(addStatement(2,5));
console.log(addExpression(2,4));