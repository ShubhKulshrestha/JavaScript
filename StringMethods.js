//String Methods
//str.toUpperCase()
let str="Shubh";
console.log(str.toUpperCase());

//str.toLowerCase()
let str="Shubh";
console.log(str.toLowerCase());

//str.trim()
let str="Shubh";
console.log(str.trim());

//str.slice(start,end?) [In this method the ending index is optional value and that is not inclusive.]
let str="Shubh";
console.log(str.slice(1,3 ));

let str="3567566";
console.log(str.slice(1,3 ));
console.log(str.slice(7));//7566
console.log(str.slice());//3567566


// str1.concat(str2) [join str1 with str2]
let str1="Shubh";
let str2="BCA";
console.log(str1.concat(str2));//ShubhBCA
console.log(a+b);//ShubhBCA


// str.replace(searchVal,newVal)
let str="hello";
console.log(str.replace("h","m"));//melllo
let str="hello";
console.log(str.replace("l","m"));//hemlo
console.log(str.replaceAll("l","m"));//hemmo


// str.charAt(index)
let str="hello";
console.log(str.charAt(1));
