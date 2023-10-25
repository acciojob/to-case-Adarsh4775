function toCase(text) {
  // write your code here
	const newValueB = text.toUpperCase(); 
		const newValueA = text.toLowerCase();
	const addValue = newValueA + "-" + newValueB;
	return addValue ;
}
  

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text)); 


   

