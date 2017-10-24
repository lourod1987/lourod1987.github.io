var altIO = document.querySelector("#programIO");
//var userInputGet = document.getElementById("userInput").innerHTML;
var x = document.getElementById("programMenus");
var altMessages = document.querySelector("#programMessages");

console.log("altMenus text: " + x);

x.querySelector("p").innerHTML = "--Program - Main Menu--";
altMessages.innerHTML = "Please enter 1, 2, 3, or Exit:";


function myFunction() {
    var x = document.getElementById("myDIV");
    x.querySelector("p.example").innerHTML = "Hello World!";
}


function userInputSet(string) {
    userString = userInputGet.innerHTML;
    return userString;
}

function projectRun(string){
			console.log("--Program - Main Menu--");
			var input = prompt("Please enter 1, 2, 3, or Exit:");
			/* I used these variables just to keep the code a little cleaner but they are not necessary. */
			var mod1 = "-blip";
			var mod2 = "-clang";
		
			/* This first if statement allows the program to catch when nothing has been entered.  */
			if(input === ""){
				console.log("You must enter one of the above values.");
				projectRun(string);
				
			} else if(input == "1"){
				console.log("--Program 1--");
				string = prompt("Enter a string:");
				
				/* This first nested if statement allows us to catch when no value has been entered for our string prompt */
				if(string === "") {
					console.log("You need to enter some text for 'Enter a string'.");
					string = prompt("Enter a string:");
					projectRun(string);
				} else {
					if(string !== ""){
						console.log("String recorded, string length is " + string.length);
						console.log(string);
						projectRun(string);
					} else {
						console.log("An error has occurred!");
					}
				projectRun(string);
				}
				
			} else if(input === "2") {
				console.log("--Program 2--");
				
				if(string !== ""){
					if(string.search(mod1 || mod2) === true){
						console.log(string);
						console.log("String has already been translated into robot language.");
						projectRun(string);
					} else {
						var ar = string.split(" ");
						console.log("This is ar:", ar);
						console.log("This is ar[0]: ",ar[0]);
						console.log("This is the length of ar array: ", ar.length);
						var newArray = [];
						console.log("This is what is in the newArray: ", newArray);
						var x = 0;
						console.log("X count: ", x);
						
						for(var i = 0; i <= ar.length - 1; i++){
							if(ar[x].length >= 5){
								combine = ar[x].concat(mod1);
								console.log("This is the combine variable: ", combine);
								newArray.push(combine);
								console.log("This is what is in the newArray: ", newArray);
								x += 1;
								console.log("X count: ", x);
							} else {
								if(ar[x].length < 5){
									combine = ar[x].concat(mod2);
									newArray.push(combine);
									console.log("This is what is in the newArray: ", newArray);
									x += 1;
									console.log("X count: ", x);
								} else {
									console.log("An error has occurred!");
								}
							}
						}
					string = newArray.join(" ");
					console.log(string);
					console.log("String converted");
					projectRun(string);
					} 
				} else {
					console.log("You must enter a String by using option '1'.");
					projectRun(string);
				}
				
			} else if(input === "3") {
				console.log("--Program 3--");
				
				if(string === ""){
					console.log("You need to convert your string first by using option '2', after you've entered a string in option '1'.");
					projectRun(string);
				} else if(string !== ""){
					if (string.includes(mod1 || mod2) === true){
						console.log(string);
						string = "";
						projectRun(string);
					} else {
						console.log("This string has not been modified: ", string);
						console.log("Please use option '2' in order to convert the string to 'ROBOT Language'");
						document.write(string.includes(mod1 || mod2));
						projectRun(string);
					}
				} else {
					console.log("This string has not been modified: ", string);
					console.log("Please use option '2' in order to convert the string to 'ROBOT Language'");
					document.write(string.includes(mod1 || mod2));
					projectRun(string);
				}
				
			} else if(input == "Exit" || "EXIT" || "exit") {
				console.log("--Program Exit--");
				console.log("Thank you for using ROBOT Language Converter!");
			
			} else {
				console.log("You did not input a valid command.");
				projectRun(string);
			}
		}
		
var userString = "";
var combine;
projectRun(userString);