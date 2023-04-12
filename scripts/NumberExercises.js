// TODO Change the string below to insert an apostraphe into "Its". Do not change the outer quotation marks.
function escapePractice() {
    let escape = 'I love ice cream. Its my favorite dessert.';  // You can get rid of the variable and just return the string when you're done
    return escape;
}

// TODO Given a random string, return its length
function findAStringsLength(randomString) {
}

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

    console.log(url.slice(12));
}

// ! Use slice()
 function getHttp(url) {
 
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

}


// TODO Given a random string, return that string with all lowercase letters
/**
 * 
 * @param {String} string 
 */
function toLower(string) {

}

// TODO Given three strings, combine them using concat()
/**
 * 
 * @param {String} string1 
 * @param {String} string2 
 * @param {String} string3 
 */
function combineStrings(string1, string2, string3) {

}

// TODO Given a string with a lot of whitespace included, return that string without the leading / trailing whitespace
/**
 * 
 * @param {String} string 
 */
function trimWhitespace(string) {

}

// TODO Given a string, add whitespace to the start of a string using padStart()
/**
 * 
 * @param {String} string 
 */
function addWhitespace(string) {

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

}

// TODO Given a random string, return the last character's unicode using charCodeAt()
/**
 * 
 * @param {String} string 
 */
function getLastCharInUnicode(string) {

}

// TODO Given a random string, return the second character using brackets ([])
/**
 * 
 * @param {String} string 
 */
function getSecondChar(string) {

}

// TODO Given a random string, return it as an array with each word as a separate element using split()
/**
 * 
 * @param {String} string 
 */
function convertToArray(string) {

}

// TODO Given a random string, return it as an array with each character as a separate element using split()
/**
 * 
 * @param {String} string 
 */
function convertToCharArray(string) {

}