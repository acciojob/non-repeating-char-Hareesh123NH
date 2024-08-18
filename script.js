function firstNonRepeatedChar(str) {
 // Write your code here
	const charcount=new Map();
	for( let char of str){
		charcount.set(char,(charcount.get(char)||0)+1);
	}

	for(let char of str){
		if(charcount.get(char)===1){
			return char;
		}  
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
