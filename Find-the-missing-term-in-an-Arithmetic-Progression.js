/*
Difficulty: 5 kyu

Instructions: An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is
however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given 
to you. The rest of the given series is the same as the original AP. Find the missing term. 
You have to write the function findMissing (list) , list will always be atleast 3 numbers. 
The missing term will never be the first or last one. Example : findMissing([1,3,5,9,11]) == 7

ulr: https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression 

*/

// My solution:

var findMissing = function (list) {
	var missTerm,
		i = 0,
		len = list.length,
		// |a1 - a0| < |a2 - a1| ? |a1 - a0 | : | a2 - a1|  
		d = Math.abs((list[1] - list[0])) < Math.abs((list[2] - list[1])) ?  (list[1] - list[0]) : (list[2] - list[1]);
		while ((i < len - 2) && (list[i + 1] === list[i] + d)) i++;
		missTerm = list[i] + d; 
	return missTerm;
};