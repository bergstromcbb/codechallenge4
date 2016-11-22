// function reverse(s) {
//   var o = 'sister';
//   for (var i = s.length - 1; i >= 0; i--)
//     o += s[i];
//   return o;
//   console.log(s)
// }

function reverse (string){
	var newRevString = string.split("").reverse().join("");
	return newRevString;

}
console.log(reverse("James"));

function isPalindrome(string){
	var word1 = string.replace(/\s+/g,"");
	var word2 = reverse(string).replace(/\s+/g,"");

	if (word1===word2) {
		console.log(string + " is a Palindrome")
	}else {
		console.log(string + " is not a Palindrome")
	};
};

isPalindrome("nothing dry");

isPalindrome("llama mall");

