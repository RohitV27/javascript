for (var i = 23; i <= 45; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

var count = 0;
for (var i = 23; i <= 45; i++) {
  if (i % 2 != 0) {
    count++;
    console.log(count, "count", i)
  }
}
console.log(count);

var oddCount = 0;
var evenCount = 0;
for (var i = 23; i <= 45; i++) {
  if (i % 2 != 0) {
    oddCount++;
    console.log(count, "count", i)
  } else {
    evenCount++;
  }
}
console.log(oddCount, "odd count");
console.log(evenCount, "even count");

var oddNumbers = [];
for (var i = 23; i <= 45; i++) {
  if (i % 2 != 0) {
    oddNumbers.push(i);
  }
}

console.log(oddNumbers, "list");

var numbers = [1, 3, 4, 5, 6, 87, 9];

var evenArray = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenArray.push(numbers[i]);
  }
}

console.log(evenArray);

var array = [1, 2, 4, 5, 6, 7, 8, 23, 43, 65, 76, 24, 12, 34];

var target = 35;

var flag = false;

for (var i = 0; i < array.length; i++) {
  if (array[i] == target) {
    console.log("Found it");
    flag = true;
  }
}

if (flag == false) {
  console.log("Not found.");
}

// Q Find out which two numbers from array have addition of target

var array = [1, 2, 3, 4];

var target = 8;

for (var i = 0; i < array.length; i++) {
  console.log(array[i])
  for (var j = i + 1; j < array.length; j++) {
    console.log(array[i], "i", array[j], "j")
    if (array[i] + array[j] == target) {
      console.log(array[i], array[j]);
    }
    j++
  }
    i++
}
