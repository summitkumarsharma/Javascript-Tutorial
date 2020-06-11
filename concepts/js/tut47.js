console.log('This is tutorial 47');

let regex = /sumitghhjjyt/;


// Lets look into some metacharacter symbols
// regex = /^sumittdc/; // ^ carat symbol means expression will match if string starts with
// regex = /sumitwith$/; // $ at the end of the string means "string ends with"
// regex = /s.mit/; //matches any one character
// regex = /s*mit/; //matches any 0 or more characters
// regex = /su?mitj?t/; //? after character means that character is optional
regex = /s\*mit/

let str = "s*mit means codewith"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}