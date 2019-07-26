let primitive = "hello world";

let str = new String('Hello Js');
console.log(str);
console.log(typeof str);

// the character get stored in a array like manner.

console.log(str[3]);
console.log(str.length);

console.log(str.valueOf());
console.log(str.toString());   


// charAt

console.log(primitive.charAt(0));

// indexOf()

console.log(primitive.indexOf('o',5));

// subString()

console.log(primitive.substring(1,4));

// concat()

let first = "Java ";

console.log(first.concat(primitive));
console.log(first.concat('script'));

// split() return an array => it convert the whole string to an array depending upon the split value.( split(value) )

let sent = 'Learning full stack developement';
console.log(sent.split());    // convert this to an array.

console.log(sent.split(' '));

let str1 = "hello world of Javascript";

let newStr = str1.split(' ').join('-').toLowerCase();

console.log(newStr);

let newStr1 = str1.toLowerCase().split(' ').map(e => e.charAt(0)).join('-');
console.log(newStr1);


// lastIndexOf

console.log(primitive.lastIndexOf('o'));

// slice()

console.log(primitive.slice(1,4));
console.log(primitive.slice(1,-4));
console.log(primitive.substring(1,4));
console.log(primitive.substr(1,4));
// diff b/w slice and subString





