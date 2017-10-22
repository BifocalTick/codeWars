/*
Difficulty: 6 kyu

Instructions: Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the 
two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the 
elements in a squared, regardless of the order.

Examples

Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 
the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays

If we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

url: https://www.codewars.com/kata/are-they-the-same

*/

// My solution:

function comp(array1, array2){
	var sortArr1 = array1 ? array1.sort(function(a, b){ return a - b }) : false,
		sortArr2 = array2 ? array2.sort(function(a, b){ return a - b }) : false;
	if (sortArr1.length - sortArr2.length === 0) {
		var i = 0; var len = sortArr1.length;
		while ( (Math.pow(sortArr1[i], 2) === sortArr2[i]) && (i < len)  ) {
			i++;
		}
		if (i !== len) return false;
		else return true;
	} else return false;
}