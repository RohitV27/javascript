var myData = {name : "Rohit", age : 25, myList : ["Rahul", "Surya", "Virat"]}

console.log(myData.name)
console.log(myData.myList)
console.log(myData.age)
console.log(myData.myList[2])

var numbers = [0, 1, 2, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5]

let temp ={};

for(i =0; i < numbers.length; i++) 
{
    if(numbers[i] in temp)
    {
        temp[numbers[i]] += 1;
    }
    else
    {
        temp[numbers[i]] = 1;
    }
}
console.log(temp)
console.log(Object.keys(temp));