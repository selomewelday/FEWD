/*

We're going to play a game of FizzBuzz. The rules are simple. We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".

What will we print if the number is divisible by 3 fizz AND 5 buzz? That's right! "FizzBuzz"!

There are many ways to do this, but we'd like you to use a nested conditional in this exercise.

*/


for (var i= 1; i <= 20; i++)
	if ( i % 3 ===0 && i % 5 ===0) {//if our number divided by 5 has a remainder of 0 then do this //
		console.log("FizzBuzz");
	} else if ( i % 3===0){
		console.log("Fizz");
	} else if (i % 5===0){
		console.log("Buzz");
	}
