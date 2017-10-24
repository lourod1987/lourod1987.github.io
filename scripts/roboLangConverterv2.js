/*
    <title>Project 1 - Luis Rodriguez III</title>
    Defining a function to call to run this program. Makes the code resusable and also allows us to call the function to run again after each if/else statement terminates itself */
var altIO = document.querySelector("#programIO");
var userInputGet = document.querySelector("#userInput");
var combine;
var userString = "";
var altMenus = document.querySelector("#programMenus");
var altMessages = document.querySelector("#programMessages");

window.onload=function() {
    var altMenus = document.querySelector("#programMenus");
    var altMessages = document.querySelector("#programMessages");
    
    
    altMenus.innerHTML = "--Program - Main Menu--";
    altMessages.innerHTML = "Please enter 1, 2, 3, or Exit:";
    projectRun(userString);
    };
//    document.getElementById('user-input').onsubmit=function() {
        /* do what you want with the form */



function projectRun(string) {
    
//    console.log("logging current userInput ID field text: " + userInputGet.innerHTML);
//    userInputGet.value = "Click Submit";
//    var userInputSet = userInputGet.value;
    var userInputSet;
//    console.log(userInputGet.value);
//    userInputSet = userInputGet.value;
    //var stringfyUserInput = userInputSet.toString());
//    console.log(userInputSet);
    

    //var input = prompt("Please enter 1, 2, 3, or Exit:");
    /* I used these variables just to keep the code a little cleaner but they are not necessary. */
    var mod1 = "-blip", mod2 = "-clang";

    /* This first if statement allows the program to catch when nothing has been entered.  */
    if (userInputSet === "") {
        altMessages.innerHTML = "Please enter 1, 2, 3, or Exit:<br /> You must enter one of the above values.";
        projectRun(string);
    } else if (userInputSet === "1") {
        altMenus.innerHTML = "--Program 1--";
        altMessages.innerHTML = "Enter a string:";

        /* This first nested if statement allows us to catch when no value has been entered for our string prompt */
        if (string === "") {
            altMessages.innerHTML = "You need to enter some text for 'Enter a string'.";
            string = userInputSet;
            projectRun(string);
        } else {
            if (string !== "") {
                altMessages.innerHTML = "String recorded, string length is " + string.length;
                altIO.innerHTML = string;
                projectRun(string);
            } else {
                altMessages.innerHTML = "An error has occurred!";
            }
            projectRun(string);
        }
    } else if (userInputSet === "2") {
        altMenus.innerHTML = "--Program 2--";
        if (string !== "") {
            if (string.search(mod1 || mod2) === true) {
                console.log(string);
                altMessages.innerHTML = "String has already been translated into robot language.";
                projectRun(string);
            } else {
                var ar = string.split(" ");
                console.log("This is ar:", ar);
                console.log("This is ar[0]: ", ar[0]);
                console.log("This is the length of ar array: ", ar.length);
                var newArray = [];
                console.log("This is what is in the newArray: ", newArray);
                var x = 0;
                console.log("X count: ", x);

                for (var i = 0; i <= ar.length - 1; i++) {
                    if (ar[x].length >= 5) {
                        combine = ar[x].concat(mod1);
                        console.log("This is the combine variable: ", combine);
                        newArray.push(combine);
                        console.log("This is what is in the newArray: ", newArray);
                        x += 1;
                        console.log("X count: ", x);
                    } else {
                        if (ar[x].length < 5) {
                            combine = ar[x].concat(mod2);
                            newArray.push(combine);
                            console.log("This is what is in the newArray: ", newArray);
                            x += 1;
                            console.log("X count: ", x);
                        } else {
                            altMessages.innerHTML = "An error has occurred!";
                        }
                    }
                }
                string = newArray.join(" ");
                console.log(string);
                altMessages = "String converted.";
                projectRun(string);
            }
        } else {
            altMessages.innerHTML = "You must enter a String by using option '1'.";
            projectRun(string);
        }
    } else if (userInputSet === "3") {
        altMenus.innerHTML = "--Program 3--";
        if (string === "") {
            altMessages.innerHTML = "You need to convert your string first by using option '2', after you've entered a string in option '1'.";
            projectRun(string);
        } else if (string !== "") {
            if (string.includes(mod1 || mod2) === true) {
                console.log(string);
                string = "";
                projectRun(string);
            } else {
                altMessages.innerHTML("This string has not been modified: ", string, "Please use option '2' in order to convert the string to 'ROBOT Language'");
                //document.write(string.includes(mod1 || mod2));
                projectRun(string);
            }
        } else {
            altMessages.innerHTML("This string has not been modified: ", string, "Please use option '2' in order to convert the string to 'ROBOT Language'");
            //document.write(string.includes(mod1 || mod2));
            projectRun(string);
        }
    } else if (userInputSet === "Exit" || "EXIT" || "exit") {
        altMenus.innerHTML("--Program Exit--");
        altMessages.innerHTML = "Thank you for using ROBOT Language Converter!";
    } else {
        altMessages.innerHTML = "You did not input a valid command.";
        projectRun(string);
    }
}

//        projectRun(string);
            // Should be triggered on form submit;
            //alert('hi');
            // You must return false to prevent the default form behavior;
//            return false;
//  };    