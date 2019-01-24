function isitorisntit(){
	var newString = document.getElementById('newInput').value;
	isPalindrome(newString);
	document.getElementById('newInput').value = "";
};

function isPalindrome(string){
	var word1 = string.replace(/\s+/g,"");
	var word2 = word1.split("").reverse().join("");

	if (word1===word2) {
		var isPal = document.createElement('div');
		isPal.innerText = string + ' - This is';
		document.getElementById('feedback').appendChild(isPal);
		console.log(string + " is a Palindrome")
	}else {	

		var isntPal = document.createElement('div');
		isntPal.innerText = string + ' - This is not';
		document.getElementById('feedback').appendChild(isntPal);
		console.log(string + " is not a Palindrome")

		
	};
};
isPalindrome("llama mall")
isPalindrome("i love you")






