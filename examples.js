//Arrays 
const array1 =["hello", 5 , true] 
//? better to use one data type to keep things in order

//accesing array data
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);

// length of array
console.log(array1.length);

function myFunction(){
    return "hello";
}
//adding to an array (the hard way)
const companies = ["Google", "Amazon", "Apple"];
console.log(companies);
console.log(companies.length);  // 3
console.log(companies[3]);   //undefined
companies[3]= "Microsoft";   // adds microsoft
console.log(companies);
companies[companies.length] = "Meta";   //adds Facebook
console.log(companies)
// proper way to add to elements 
companies.push("Kroger");   //use PUSH to add to an array 
console.log(companies.push("Kroger"));

//Delete Keyword
delete companies[1]; //removes Amazon (if only)
console.log(companies);

// POP()
const colors=["blue" , "green" , "red" , "maroon"];
console.log(colors);
colors.pop();
console.log(colors)     //removes and returns

//shift()
const games =["Black Ops" , "Modern Warfare" , "Advanced Warfare"];
console.log(games);
games.shift();
console.log(games);

//unshift()
const sports=["football" , "Soccer", "lacrosse"];
console.log(sports);
sports.unshift("Hockey");
console.log(sports); 

//splice()
const currencies=["usd" , "gbp" , "euro"];
console.log(currencies);
currencies.splice(0, 0, "yen", "peso", "ruble");
console.log(currencies);
currencies.splice(2, 1, "afghani", "krone", "yuan")
console.log(currencies);

//join()
const states=["AZ", "IL", "CA", "AK"];
console.log(states);

//concat()
console.log(states.concat(sports, currencies));

//slice()
const dog=["lab", "corgi", "shepherd"]
console.log(dog.slice(1, 3));

//sort()
const brands=["puma", "prada", "Micheal Kohrs", "No Boundaries"];
console.log(brands);
brands.sort();
console.log(brands);
brands.reverse();
console.log(brands);

const nums = [99, 565, 558, 23, 468, 120];
console.log(nums);
nums.sort();
console.log(nums);
// compare function
nums.sort(function(a, b){
    return a-b;
});
console.log(nums);

//find min/max of array 
console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));


//indecOf()
const vacation=["Rome", "Paris", "Honolulu", "Phoenix", "Kyoto", "Kyoto","Hong Kong"];
console.log(vacation.indexOf("Rome"));      //* CORRECT
console.log(vacation.indexOf("paris"));        //! INCORRECT

//lastIndexOf()
console.log(vacation.lastIndexOf("Kyoto"));