// Assignment code here

var lowerCase = [
    'a',
    'b', 
    'c', 
    'd', 
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    ]
    
    var upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ]
    
    var numerChar = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ];
    
    var specialChar = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "=",
        "+",
        "[",
        "{",
        "}",
        "]",
        "\\",
        ";",
        ":",
        "'",
        ";",
        ":",
        ",",
        "<",
        ".",
        ">",
        "/",
        "?",
        "`",
        "~"
      ];


//function for selecting password options
var passwordSelections = function() {
    window.alert("Please choose character amount from 8 up to 128 characters.");
    var passwordLength = window.prompt("Enter your character amount.")

    if (isNaN(passwordLength) === true) {
        alert("Character amount must be a number.")
    }

    //convert string to an integer
    var passwordInt = parseInt(passwordLength);

    //validate prompt answer
    if (passwordInt >= 8 && passwordInt <= 128) {

    } else {
        window.alert("Invalid character amount. Must be between 8 and 128 characters. Try again.")
        passwordSelections();
    }

        var lowerCase = confirm("Click OK if you want lowercase letters");
        var upperCase = confirm("Click OK if you want upper case.");
        var numerChar = confirm("Click OK if you want numbers.");
        var specialChar = confirm("Click OK if you want special characters."); 
    
        if (
            lowerCase === false &&
            upperCase === false &&
            numerChar === false &&
            specialChar === false
        )
        {
            alert("You must choose at least one character selection.");
            passwordSelections();
        }
    

    // object to store user input
    var passwordOptions = {
        length: passwordLength,
        lowerCase: lowerCase,
        upperCase: upperCase,
        numerChar: numerChar,
        specialChar: specialChar,
    };
    
    //for (key in passwordOptions) {
        //if (object.lowerCase] === true) {
        //trueValues.concat(lowerCase)
        //}
    //}

    //return passwordOptions;

}; 

var trueValues = [];

var generatePassword = function() {
    //var options = getPasswordOptions();
    //variable to store passowrd as it's being concatenated
    //var result = [];


    //must call passwordSelections to initiate prompts
    passwordSelections();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);