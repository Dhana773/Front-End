function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));  // output: "olleh"

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // output: true
console.log(isPalindrome("hello"));   // output: false

function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // output: 9


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // output: [1, 2, 3, 4, 5]


function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // output: 120


function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // output: true
console.log(areAnagrams("hello", "world"));   // output: false


function secondLargest(arr) {
    if (arr.length < 2) return null; 

    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 20, 4, 45, 99])); // output: 45

function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // output: 3

function countOccurrences(str) {
    let occurrences = {};

    for (let char of str) {
        occurrences[char] = (occurrences[char] || 0) + 1;
    }

    return occurrences;
}

console.log(countOccurrences("hello")); // output: { h: 1, e: 1, l: 2, o: 1 }


//Outputbased
console.log(1 + "2" + "2"); //output:122
console.log(1 + +"2" + "2"); //output:32
console.log(1 + -"1" + "2"); //output:02
console.log(+"1" + "1" + "2"); //output:112
console.log("A" - "B" + "2"); //output:NaN2
console.log("A" - "B" + 2); //output:NaN


console.log(0.1 + 0.2 === 0.3);  //output:false

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //output:456


function foo() {
    return
    {
        name: "John"
    };
}
console.log(foo()); //output:undefined

console.log(typeof NaN); //output:number

Array.prototype.customMap = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) { 
            resultArray.push(callback(this[i], i, this));
        }
    }

    return resultArray;
};


const numbers = [1, 2, 3, 4];
const doubled = numbers.customMap(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]



function firstNonRepeatingChar(str) {
    const charCount = {};

    
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; 
}

console.log(firstNonRepeatingChar("aabbcce")); // output: "e"

