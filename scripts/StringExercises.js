// * STRING EXERCISES
// ! For this section, each exercises will be part of a function
// ! Put your final answer on the return line 

// TODO Change the string below to insert an apostraphe into "Its". Do not change the outer quotation marks.
function escapePractice() {
    let escape = 'I love ice cream. It\'s my favorite dessert.';  // You can get rid of the variable and just return the string when you're done
    return escape;
}

// TODO Given a random string, return its length

/**
 * 
 * @param {String} randomString 
 * @returns 
 */
function findAStringsLength(randomString) {
    return randomString.length;
}

// TODO Given a random string, how would you access the last character in that string? Return your answer
/**
 * 
 * @param {String} string 
 */
function accessLastCharacter(string) {
    return string.charAt(string.length - 1);
}

// ! Use slice()
// TODO Given a random url, return everything after the www.
// Your answer should look something like this: google.com, bing.com, etc
// https://www.google.com
/**
 * 
 * @param {String} url 
 */
function getWebsiteName(url) {
    return url.slice(12);
}

// ! Use slice()
// TODO Given a random url, return the http portion and return it. 
// Example url: https://www.google.com
function getHttp(url) {
    return url.slice(0, 5);
}

// ! Use substring()
// TODO Given a random url, return the substring com
function getCom(url) {
    return url.substring(19);
}

// ! Use substr()
// TODO Given a random url, return the www portion of the string
/**
 * 
 * @param {String} url 
 * @returns 
 */
function getWww(url) {
    return url.substr(8, 3);
}

// Replace the url for bing with google, and return google's url
function useBetterSearchEngine() {
    let browser = "https://www.bing.com";
    return browser.replace("bing.com", "google.com");
}

// TODO Given a random string, return that string in all capital letters
/**
 * 
 * @param {String} string 
 */
function toUpper(string) {
    return string.toUpperCase();
}


// TODO Given a random string, return that string with all lowercase letters
/**
 * 
 * @param {String} string 
 */
function toLower(string) {
    return string.toLowerCase;
}

// TODO Given three strings, combine them using concat()
/**
 * 
 * @param {String} string1 
 * @param {String} string2 
 * @param {String} string3 
 */
function combineStrings(string1, string2, string3) {
    return string1.concat(string2, string3);
}

// TODO Given a string with a lot of whitespace included, return that string without the leading / trailing whitespace
/**
 * 
 * @param {String} string 
 */
function trimWhitespace(string) {
    return string.trim();
}

// TODO Given a string, add whitespace to the start of a string using padStart()
/**
 * 
 * @param {String} string 
 */
function addWhitespace(string) {
    return string.padStart(4, " ");
}

// TODO Given a string, add whitespace to the end of the string using padEnd()
/**
 * 
 * @param {String} string 
 */
function addTrailingWhitespace(string) {

}

// TODO Given a random string, return the first character using charAt()
/**
 * 
 * @param {String} string 
 */
function getFirstChar(string) {
    return string.charAt(0);
}

// TODO Given a random string, return the last character's unicode using charCodeAt()
/**
 * 
 * @param {String} string 
 */
function getLastCharInUnicode(string) {
    return string.charCodeAt(string.length - 1);
}

// TODO Given a random string, return the second character using brackets ([])
/**
 * 
 * @param {String} string 
 */
function getSecondChar(string) {
    return string[1];
}

// TODO Given a random string, return it as an array with each word as a separate element using split()
/**
 * 
 * @param {String} string 
 */
function convertToArray(string) {
    return string.split(" ");
}

// TODO Given a random string, return it as an array with each character as a separate element using split()
/**
 * 
 * @param {String} string 
 */
function convertToCharArray(string) {
    return string.split("");
}
