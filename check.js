function hello() {
	return "hello edabit.com"
}

class Circle {
	constructor (radius) {
	  this.radius = radius;
	}
  
	getArea() {
	  return Math.PI * Math.pow(this.radius, 2);
	}
  
	getPerimeter() {
	  return 2 * Math.PI * this.radius;
	}

	function addition(a, b) {
		return a + b;
	}
	
	// Test the function with examples
	console.log(addition(3, 2));   // Output: 5
	console.log(addition(-3, -6)); // Output: -9
	console.log(addition(7, 3));   // Output: 10function addition(a, b) {
    return a + b;
}

// Test the function with examples
console.log(addition(3, 2));   // Output: 5
console.log(addition(-3, -6)); // Output: -9
console.log(addition(7, 3));   // Output: 10


function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

// Test the function with examples
console.log(nextEdge(8, 10)); // Output: 17
console.log(nextEdge(5, 7));  // Output: 11
console.log(nextEdge(9, 2));  // Output: 10

function howManySeconds(hours) {
    return hours * 3600; // 60 seconds/minute * 60 minutes/hour
}

// Test the function with examples
console.log(howManySeconds(2));  // Output: 7200
console.log(howManySeconds(10)); // Output: 36000
console.log(howManySeconds(24)); // Output: 86400

function recurIndex(str) {
    if (!str) {
        return {};
    }

    const seen = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char] !== undefined) {
            return { [char]: [seen[char], i] };
        }
        seen[char] = i;
    }

    return {};
}

// Test the function with examples
console.log(recurIndex("DXTDXTXDTXD")); // Output: {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV")); // Output: {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")); // Output: {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")); // Output: {"D": [3, 7]}
console.log(recurIndex(""));           // Output: {}
console.log(recurIndex(null));         // Output: {}

function convert(minutes) {
    return minutes * 60; // 60 seconds in a minute
}

// Test the function with examples
console.log(convert(5)); // Output: 300
console.log(convert(3)); // Output: 180
console.log(convert(2)); // Output: 120
