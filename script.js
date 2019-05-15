//1. Write the function isEmpty(obj) which returns true if the object has no properties, otherwise false

//-------------------------------------------------------------------------------------------------------------------------------------------------

/*
function isEmpty(obj) {
    
    for( var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        } 
    }
    
    return true;
}

let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule))

*/



//---------------------------------------------------------------------------------------------------------------------------------------------------

//2. Write the code to sum all salaries and store in the variable sum. If salaries is empty, the result must be 0.
/*
function totSal(salaries) {


    var sum =0;
    
//    for(var name in salaries) {
//        if(salaries.hasOwnProperty(name)) {
//            sum=0;
//
//        }
//    }
    
    for(var name in salaries) {
        
        sum += salaries[name]
    }    
    return sum;   
}


let salaries = {
    John: "100",
    Ann: "160",
    Pete: "130"
}

console.log(totSal(salaries))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//3. Create a function multiplyNumeric(obj) that multiplies all numeric properties of objects by 2.
/*
function multiplyNumeric(menu) {
    console.log(typeof menu === "object")
    
    for(var prop in menu) {
       if(!isNaN(menu[prop])) {
            
            menu[prop] = menu[prop]*2
       }
    }
    
    console.log(menu)
}


let menu = {
    width : 200,
    height : 300,
    title : "My menu"
}

multiplyNumeric(menu)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//4. Add a property to the following object so that the following usage of object works 
/*
    let user = {
        name : "John",
        money : 1000,
        [Symbol.toPrimitive](hint) {
            return hint == "string" ? `{name : ${this.name}}` : this.money
        }
    }

alert(user)
console.log(+user)
console.log(user + 500)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//5. Add a property to the following object so that the following usage of object works 
 /*
    let user = {
        name : "John",
        
        toString() {
            return this.name
        }
    }
    
    alert(user)
    console.log(user+500)
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------

//6. Add a property to the following object so that the following usage of object works 
/*
var name = "vishnu"
function makeUser() {
    
    return {
        name : "John",
        ref: this
        
        
    }
}

user = makeUser()
console.log(user.ref.name)
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------

//7.Create an object calculator with three methods
/*
calculator = {
    
    read() {
    var values= [];
    this.num1 = +prompt("Enter the first value:")
    this.num2 = +prompt("Enter the second value:")
    console.log(this.num1,this.num2)   
},
    sum() {
        var sum=0;
        sum = this.num1 + this.num2;
        return sum;
    },
    
    mul() {
        var product=0;
        product = this.num1*this.num2;
        
        return product;
    }
}

var x = calculator

calculator = null

x.read()
console.log(x.sum())
console.log(x.mul())
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//8. Make th function calls chainable
/*
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        
        return this;
    },
    showStep() {
        alert(this.step);
        
        return this;
    }
}


ladder.up().up().down().up().showStep();
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//9. Create a constructor function that creates objects with methods
/*
function Calculator() {
    
    
        this.read = function() {
            this.num1 = +prompt("Enter the first value:")
            this.num2 = +prompt("Enter the second value:")
            console.log(this.num1,this.num2)
        
    },
    
        this.sum = function() {
            var sum;
            sum = this.num1 + this.num2;
            return sum;
    },
    
    this.mul = function() {
        var product;
        product = this.num1*this.num2;
        
        return product;
    }  
        }



calculator = new Calculator()
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//10. Create a constructor function that creates objects with methods
/*
function Accumulator(startingValue) {
    this.value = startingValue,
    
        this.read = function() {
        
        this.value+= parseInt(prompt("Enter a value to add:"))
        
    }
    
    
    }
    
let accumulator = new Accumulator(1);
accumulator.read()
accumulator.read()
console.log(accumulator.value)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//11. Create a series using array.

/*
function series(arr) {
    
   for(var i=0;i<arr.length;i++) { 
    var temp = arr.splice(arr.length-1,1)
    arr.unshift(temp[0])
    console.log(arr)
   }
    
}


arr =[1,1,1,0,0,0,0];
series(arr)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//12. Camelize the string

/*
function camelize(str) {
    
    var arr=[];
    var camelized = "";
    
    arr = str.split("-")
    console.log(arr)
    var temp = "";
    
    for(i=0;i<arr.length;i++) {
        
        temp += arr[i].substring(0,1).toUpperCase() + arr[i].substring(1,arr[i].length);
}
    
    if(arr[0] !== "") {
        
        cha = temp[0].toLowerCase()
    } else {
        cha = temp[0].toUpperCase()
    }
    
    camelized = cha + temp.substring(1)
    console.log(camelized)   
    
}

camelize("Background-color")
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//13. Write a function that gets an array looks for numbers between a and b and returns an array of it.

/*
function filterRange(arr, a, b) {
    
    var filtered = [];
    
    for(i=0; i<arr.length; i++) {
          
      if((arr[i] >= a && arr[i] <= b) || (arr[i] <= a && arr[i] >= b)) {
          
          filtered.push(arr[i])
      }  
    }
    
    console.log(filtered)
    
}

let arr = [5,3,8,1]

filterRange(arr,1,4)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//14. Write a function that gets an array looks for numbers between a and b and returns an array of it.

/*
function filterRangeInPlace(arr, a, b) {
    
    var filtered = [];
    
    for(i=0; i<arr.length; i++) {
          
      if((arr[i] >= a && arr[i] <= b) || (arr[i] <= a && arr[i] >= b)) {
          
          filtered.push(arr[i])
      }  
    }
    
    arr = filtered
    console.log(arr)
    
}

let arr = [5,3,8,1]

filterRangeInPlace(arr,1,4)

*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//15. Rotate an array.

/*
function rotateArr(arr) {
    
    
    arr.sort((a,b) => b-a)
//    var temp = arr.splice(arr.length-1,1)
//    arr.unshift(temp[0])
    console.log(arr)
}

let arr = [5,2,1,-10,8]
rotateArr(arr)
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------

//16. Sort an array alphabetically.

/*
function copySorted(arr) {
    
    var sorted = [...arr]
    
    sorted.sort()
    
    console.log(sorted)
    console.log(arr)
}

let arr = ["HTML", "Javascript", "CSS"]

let sorted = copySorted(arr)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//17. Create an extendable "Calculator" object.

/*
function Calculator() {
    
    let methods = {
        '-': (a, b) => a-b,
        '+': (a,b) => a+b
    }
    
    this.calculate = function(str) {
        let arr = str.split(" ")
        
        
        a = +arr[0],
        op = arr[1],
        b = +arr[2]
        
        if(!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        
        return methods[op](a,b)
    }
    
    this.addMethod = function(name, func) {
        methods[name] = func
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"))

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a,b) => a*b)

let result = powerCalc.calculate("2 * 3")

console.log(result)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//18. Convert into array of names.

/*
function sort(arr) {
    
    var names = [];
    
    for(i=0;i<arr.length;i++) {
        
        names[i] = arr[i].name
    }
    
    
    return names;
}

let john = {name: "John", age:25}
let pete = {name: "Pete", age:25}
let mary = {name: "Mary", age:25}

let users = [john, pete, mary]
names = sort(users)
alert(names)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//19. Concatenate name and surname.

/*
function concat(users) {
    
    fullName = [];
    
    for(i=0;i<users.length;i++) {
        
        
        fullName[i] = {fullName : users[i].name + " " + users[i].surname, id : users[i].id }
    }
    
    return fullName;
}


let john = {name: "John", surname: "Smith", id:1}
let pete = {name: "Pete", surname: "Hunt", id:2}
let mary = {name: "Mary", surname: "Key", id:3}

let users = [john, pete, mary]

let usersMapped = concat(users)
    
console.log(usersMapped)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//20. Concatenate name and surname.


/*
function sortByName(users) {
    
    var names = [];
    
    users.sort(function(a,b) {
        
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        
        if(nameA < nameB) {
            
            return -1
        }
        
        if(nameA > nameB) {
            
            return 1
        }
        
        return 0
    })
    
console.log(users)
}



let john = {name: "John", age:25}
let pete = {name: "Pete", age:25}
let mary = {name: "Mary", age:25}

let users = [john, pete, mary]

sortByName(users)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//21. Create a function that should return an array with unique items of arr.


/* 1 solution
function unique(str) {
    
    var unique = str.filter(function(ele, pos) {
        
        return str.indexOf(ele) == pos;
    })
    
    return unique;
}




let strings = ["Hare", "Krishna","Hare", "Krishna","Krishna","Krishna","Hare","Hare", ":-O"]

console.log(unique(strings))

*/

/* 2nd Solution
function unique(arr) {
    
    let unqArr = [];
    
    len = arr.length;
    
    for(let i = 0; i<len;i++) {
        
       if(unqArr.indexOf(arr[i]) === -1) {
            unqArr.push(arr[i])
        }
    }
    
    return unqArr
}


let strings = ["Hare", "Krishna","Hare", "Krishna","Krishna","Krishna","Hare","Hare", ":-O"]

console.log(unique(strings))
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//22. 

/*
let user = {
    name : "John",
    years : 30
}

let {name, years:age, isAdmin = false} = user

alert(name);
alert(age)
alert(isAdmin)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//23. Create a function that returns the name of the top paid person.

/*
function topSalary(salaries) {
    
    var arr = []
    for(var name in salaries) {
        
       arr.push(salaries[name]) 
    }
    
    if(arr.length < 1) {
        
        return 0;
    }
    
    arr.sort((a,b) => a-b);
    
    for(var name in salaries) {
        
        if(salaries[name] === arr[arr.length -1]) {
            
           return name;
        } 
    }
    console.log(arr[arr.length - 1])
    
}

let salaries = {
    
    "John" : 100,
    "Pete": 300,
    "Mary" : 250
}

console.log(topSalary(salaries))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//24. Create a function that returns the random integer within a given range.

/*
function randomInteger(min, max) {
    
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
} 

randomInteger(1, 5)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//25. Get week day from the date.

/*
function getWeekDay(date) {
    
    arr = ["SU", "MO", "TU", "WE","TH","FR","SA"]
    
    console.log(arr[date.getDay()])
    
    
}



let date = new Date(2012, 0, 3)
console.log(date)
getWeekDay(date)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//26. Get "European" week day from the date.

/*
function getWeekDay(date) {
    
    day = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
          }
    for( num in day) {
        
        
        if(num == date.getDay()) {
            console.log(day[parseInt(num)])
            } 
        
        }
        if(date.getDay() === 0) {
            console.log(day[7])
        }
    }



let date = new Date(2012, 0, 9)
console.log(date)
getWeekDay(date)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//27. Get the date from days ago given.

/*
function getDateAgo(date, days) {
    
    
    
    
    var date1 = new Date(date);
    date1.setDate(date.getDate() - days)
    console.log(date1)
    console.log(date)
    
    
}

let date = new Date(2015, 0, 2)

getDateAgo(date, 365)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//28. Get the last day of month from given year.

/*
function getLastDayOfMonth(year, month) {
    
    var day31 = [0,2,4,6,7,9,11];
    var day30 = [3,5,8,10]
  
    if(month >= 0 && month <= 11) {
        if(month === 1) {

            if((year%4 === 0 && year%100 !== 0) || year%400 === 0) {

                return 29
            } else{ 
                return 28
            }


        } else if(day31.indexOf(month) === -1) {

            return 30
        } else {
            return 31
        }
    } else {
        return "Invalid Month"
    }
}

console.log(getLastDayOfMonth(1900, 1))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//29. Get total seconds till the time.

/*
function getSecondsToday() {

    date = new Date();
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var sec = date.getSeconds()
    
    var seconds = hour*3600 + minutes*60 + sec
    
    console.log(seconds)
}

getSecondsToday()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//30. Get seconds left for tomorrow.

/*
function getSecondsToTomorrow() {
    
    date = new Date();
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var sec = date.getSeconds()
    var totalSeconds = 24*3600
    
    var secondsToTomorrow = totalSeconds - (hour*3600 + minutes*60 + sec)
    
    console.log(secondsToTomorrow)
}

getSecondsToTomorrow()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//31. Write a function to format time as 'n' sec. ago or minutes ago.

/*
function formatDate(date) {
    
    let diff = new Date() - date
    
    if(diff < 1000) {
        return 'right now'
    }
    
    let sec = Math.floor(diff/1000);
    
    if(sec < 60) {
        return sec + ' sec. ago'
    }
    
    let min = Math.floor(diff/60000)
    
    if(min < 60) {
        return min + ' min. ago'
    }
    
    let d = date;
    
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2))
    
    
    return d.slice(0,3).join('.') + ' ' + d.slice(3).join(':')
}

console.log(formatDate(new Date(new Date - 86400*1000)))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//32. Write a function that returns the string with first character uppercase and lowercase after that.

/*
function ucFirst(str) {
    
    var ucStr = str.substr(0,1).toUpperCase() + str.substring(1,str.length)
    console.log(ucStr)
}

ucFirst("john")
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//33. Write a function that returns true if the str contains 'viagra' or 'XXX'. The comparison must be case in-sensitive.

/*
function checkSpam(str) {
    
    let strLower = str.toLowerCase();
    
    return strLower.includes("viagra") || strLower.includes("xxx")
    
}

alert(checkSpam("get viAgRa now"))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//34. Write a function to truncate the string.

/*
function truncate(str, maxlength) {
    
    var len = str.length;
    
    if(len > maxlength) {
        
        var newStr = str.substr(0, maxlength - 1) + '...'
        
        console.log(newStr)
    } else {
        
        console.log(str)
    }
}

truncate("Hi Everyone!", 20)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//35. Create a function to extract a numeric value from string.

/*
function extractCurrencyValue(str) {
    
    var num = str.substr(str.indexOf('$') + 1, str.length)
    
    console.log(parseInt(num))
    
    return +num
    
    
}

alert(extractCurrencyValue("$120") === 120)
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//36. Create a function that should return an array with unique items of arr.

/*
function unique(arr) {
   
 unq = [... new Set(arr)]
 
    console.log(unq)
}

let strings = ["Hare", "Krishna","Hare", "Krishna","Krishna","Krishna","Hare","Hare", ":-O"]
unique(strings)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//37. Create a function that should return an array with unique items of arr.
/*
function aclean(arr) {
    
    let obj = {}
    
    for(i=0; i< arr.length; i++) {
        let sorted = arr[i].toLowerCase().split('').sort().join("");
        obj[sorted] = arr[i]
    }
    
    return Object.values(obj)
}

let arr = ["nap","teachers","cheaters","PAN","ear","era","hectares"]

console.log(aclean(arr))
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------

//38. Read the messages from the array.
/*
let messages = [{text: "Hello", from: "John"},
               {text: "How goes?", from: "John"},
               {text: "See you soon", from: "Alice"}]
                                            
let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log("Is the message 0 read?" + " "+readMessages.has(messages[0]))

console.log(readMessages)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//39. Create a function that should return an array with unique items of arr.

/*
let messages = [{text: "Hello", from: "John"},
               {text: "How goes?", from: "John"},
               {text: "See you soon", from: "Alice"}]

let readMessages = new WeakMap();

readMessages.set(messages[0], new Date())
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//40. Write a function to find second largest number.

/*
function getSecondLargest(nums) {
    
    var sorted = nums.sort()
    
    var unq = [...new Set(sorted)]
    
    console.log(unq[unq.length - 2])
}

let num = [2,3,6,6,5]
getSecondLargest(num)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//41. JSON.stringify problem.

/*
let room = {
    
    guest: "Spanidea",
    
    toJSON() {
        
        return this.guest
    }
    
}
console.log(JSON.stringify(room))
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//42. Replacer function problem.

/*
let room = {
    number : 23
};

let meetup = {
    
    title : "Conference",
    occupiedBy : [ {name : "John"}, {name:"Alice"}],
    place: room
}

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value
}))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//43. Array problem.

/*
function edArr(arr) {
    
    arr.push("Rock-n-roll")
    console.log(arr)
    
    var mid = Math.ceil(parseFloat(arr.length/2))
    
    
    arr[mid - 1] = "Classics"
    console.log(arr)
    
    arr.shift()
    console.log(arr)
    
    arr.unshift("Rap", "Raggae")
    console.log(arr)
}

let arr = ["Jazz", "Blues"]
edArr(arr)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//44. Sum input.
/*
function sumInput() {
    
    var num = parseInt(prompt("Enter a number: "));
    
    var arr = [];
    
    var sum = 0;
    
    
    while(!isNaN(num)) {
        
        arr.push(num)
        
        num = parseInt(prompt("Enter a number: "));
    }
    
        for(var i =0; i<arr.length;i++){
            
            sum+= arr[i]
        }
    
    console.log(sum)
    
    }

sumInput()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//45. Get max subarray sum.

/*
function getMaxSubSum(arr) {
    
    var subArr = [];
    var sumArr = [];
    
    var sum = 0;
    
    for(var i = 0;i<arr.length;i++) {
        
        for(var j = 0; j<arr.length;j++) {
           
        if(j >= i) {
           
            sum = 0;
            console.log(i,j)
            subArr = arr.slice(i , j+1);
            
            console.log(subArr)
            
            sum +=  subArr.reduce((a,b) => a+b,0)
            
            console.log(sum)
            
            sumArr.push(sum)
            
        }
            
        }
    }
    
    sumArr.sort()
    
    console.log(sumArr)
    
    console.log(sumArr[sumArr.length - 1])
}


getMaxSubSum([100,200,3,-9,11])
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//46. Calculate sum of salaries in an object usinf for...of.

/*
function sumSalaries(salaries) {
    
    var total = 0;
    
    for(var value of Object.values(salaries)) {
        
        total+= value
    }
    console.log(total)
}



let Salaries = {
    
    John : 100,
    Pete : 300,
    Mary : 250
}

sumSalaries(Salaries)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//47. Calculate the properties in an object.

/*
function count(user) {
    
    console.log(Object.keys(user).length)
}

let user = {
    
    name : 'John',
    age : 3
}

count(user)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//48. Implement the function that raises 'number' to 'power'.

/*
function pow(number, power) {
    
    var product = 1;
    for(var i=1; i<=power;i++) {
        
        product*=number;
        
    }
    
    console.log(product)
}

pow(2, 4)
*/

/*
function pow(number, power) {
    
    return power === 0 ? 1 : number*pow(number, power - 1) 
}

console.log(pow(2, 4))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//49. Write a function to calculate the sum of salaries from the object.

/*
function totSal(company) {
    
    let sal = 0;
    
        if(Array.isArray(company)) {
            console.log(company.reduce((prev, current) => prev + current.salary, 0))
            return company.reduce((prev, current) => prev + current.salary, 0)
        } else {
            let sum = 0;
            for (let subdep of Object.values(company)) {
                console.log(subdep)
              sum += totSal(subdep);
            }
            console.log(sum)
            return sum;
        }
}


let company = {
    
    sales : [{
        name : 'John',
        salary : 1000
    },
        {
            name : 'Alice',
            salary : 600
    }],
    
    development : {
        sites: [{
            name : 'Peter',
            salary : 2000
        }, {
            name : 'Alex',
            salary : 1800
        }],
        
        internals: [{
            name: 'Jack',
            salary : 1300
        }]
    }
}

totSal(company)
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//50. Implement a linked list in core JavaScript.

/*
function printList(list) {
    
   for(var key in list) {
       
        if(key === "value") {
            
            console.log(list[key])
        } else if(key === "next"){
            
            printList(list[key])
        }
   }
    
}



let list = {
    
    value : 1,
    next : {
        value : 2,
        next : {
            value : 3,
            next : {
                value : 4,
                next : null
            }
        }
    }
}

printList(list)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//51. Implement a linked list in core JavaScript in reverse order.

/*
function printList(list) {
    
    
}





let list = {
    
    value : 1,
    next : {
        value : 2,
        next : {
            value : 3,
            next : {
                value : 4,
                next : null
            }
        }
    }
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//52. Calculate sum of numbers to n.

/* 1.
function sumTo(n) {
    
    var sum = 0
    
    for(var i=1; i<=n;i++) {
        
        sum+=i;
        
    }
    
    console.log(sum)
    
}

sumTo(100000)
*/


/*2.
function sumTo(n) {
    
    var sum = 0;
    
    
    if(n>0) {
        
       return (n + sumTo(n-1))
        
    } else {
        
       return n
    }
    
    
    
}

console.log(sumTo(10))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//53. Calculate sum of numbers to n.

/*
function factorial(n) {
    
    if(n>1) {
        
        return (n*factorial(n-1))
    } else {
        return n
    }
}


console.log(factorial(5))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//54. Write a function to display n-th fibonacci number.

/*
function fib(n) {
    
    arr = [];
    
    arr[0] = 0;
    arr[1] = 1;
    
    if(n > 2) {
        
        for(var i=2;i<=n;i++) {
            
            arr[i] = arr[i-1] + arr[i-2]
        }
    }
    
    return arr[n]
}

console.log(fib(3))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//56. Create a delay function.

/*
function delay(f, ms) {
    
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}


function f(x) {
    
    console.log(x)
}

let f1000 = delay(f, 3000)

f1000("test");
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//59. Find all ways i which array can be merged.

/*
function merge(arr1,arr2,arr3) {
    
    var arr=[...arr1,...arr2,...arr3];
    
    console.log([arr1+arr2+arr3])
    
    console.log(arr)
}


let arr1 = [4,22,54,-52,36,105]
let arr2 = [84,45,65,98,52,14,70]
let arr3 = [55,65,32,65,98,45,52,25]

merge(arr1, arr2, arr3)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//60. Modify the function makeCounter().

/*
function makeCounter() {
    
    console.log(this);
    
    let count = 0;
    
    function counter(){
        return count;
    }
    
    counter.set = (value) => count = value;
    
    counter.decrease = () => count--;
    
    return counter;
}

function Test(){
    
    this.x = 10;
    console.log(this);
}

new Test();


function test(){
    let x = {
        x: 55
    }
    
    return x;
}

console.log(test());

let counter = makeCounter();

counter.set(10)
counter.decrease()
console.log(counter())
*/



//-------------------------------------------------------------------------------------------------------------------------------------------------

//61. Write a function to sum the numbers.

/*
function sum(a) {

    let currentSum = a;

    function f(b) {

        currentSum += b;
        return f;
    };
    
        f.toString = function() {
            return currentSum
        };
    
    return f;
}

console.log(sum(1)(2)(3))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//62. Use closures to create a function to implement counter.
/*
function makeCounter() {
    
    let count = 0;
    
    return function(){
        
        return ++count;
    }
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter2())
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//63. Write a function sum that works like this: sum(a)(b) = a+b

/*
function sum(first) {
    
    return function(second) {
        
        return first + second
    }
}
console.log(sum(1)(2))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//64. Write a function for inBetween() and inArray().

/*
function inBetween(a,b) {
    
    return function(x) {
        
        return x>=a && x<= b
    }
}

function inArray(arr) {
    
    return function(x) {
        
        return arr.includes(x)
    }
}

let arr = [1,2,3,4,5,6,7]

console.log(arr.filter(inBetween(3,6)))
console.log(arr.filter(inArray([1,2,10])))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//65. Sort an array of objects.

/*
function byField(field) {

    return function(a, b) {
        
        console.log(a)
        
        return a[field] > b[field]? 1 : -1;
    }
}

let users = [{name : "John", age : 20, surname : "Johnson"},
            {name : "Pete", age : 18, surname : "Peterson"},
            {name : "Ann", age : 19, surname : "Hathaway"}
            ]
console.log(users.sort(byField('name')))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//66. Fix the code to show the correct output.

/*
function makeArmy() {
    
    let shooters = [];
    
    for(let i = 0; i<10;i++ ) {
        
        let shooter = function() {
            console.log(i)
        };
        shooters.push(shooter)
        
    }
    return shooters;
}

let army = makeArmy()

army[0]()
army[5]()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//67. Print numbers every second in using function printNumbers(from, to)

/*
function printNumbers(from, to) {
    
    let current = from
    let timerId = setInterval(function() {
        console.log(current)
    
    if(current === to) {
        clearInterval(timerId)
    }
    current++
    },1000)
}

printNumbers(2,6)
*/




//-------------------------------------------------------------------------------------------------------------------------------------------------

//69. Print numbers every second in using function printNumbers(from, to)

/*
function askPassword(ok, fail) {
    
    let password = prompt("Password?", '');
    
    if (password == "rockstar") ok()
    else fail();
}

let user ={
    
    name : "John",
    
    loginOk() {

    console.log(`${this.name} Logged in`)
    },
    
    loginFail() {
    
    console.log(`${this.name} Failed to login`)
    }
}


askPassword(user.loginOk.bind(user), user.loginFail.bind(user))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//70. Extension of above problem.
/*
function askPassword(ok, fail) {
    
    let password = prompt("Password?", '');
    
    if (password == "rockstar") ok()
    else fail();
}

let user ={
    
    name : "John",
    
    login(result) {

    console.log(this.name + (result ? Logged in : Failed to login))
    }
}


askPassword(user.login.bind(true), user.login.bind(false))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//71. Class problem fix it.

/*
class Animal {
    
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    
    constructor(name) {
        
        super(name)
        this.created = Date.now()
    }
}

let rabbit = new Rabbit("White Rabbit")
console.log(rabbit.name)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//73. Here's a code that creates a pair of objects, then modifies them.

/*
let animal = {
    jumps : null
}

let rabbit = {
    
    __proto__: animal,
    jumps : true
}

console.log(rabbit.jumps) // true

delete rabbit.jumps

console.log(rabbit.jumps) // null

delete rabbit.jumps

console.log(rabbit.jumps) // undefined
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//74.

/*
let head = {
    glasses : 1
}

let table = {
    __proto__ : head,
    
    pen: 3
}

let bed = {
    __proto__ : table,
    
    sheet: 1,
    pillow: 2
}


let pockets = {
    
    
__proto__ : bed,
    money: 2000
}

console.log(pockets.pen)
console.log(bed.glasses)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//75.If we call rabbit.eat() which object receives the full property: animal or rabbit?
/*
let animal = {
    eat() {
        this.full = true
    }
}

let rabbit = {
    
    __proto__ : animal
}

rabbit.eat()

// Answer is rabbit because this points to the rabbit object.
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//76. We have two hamsters: speedy and lazy inheriting from general hamster object. When we feed one of them other is also full. Why? How to fix it?

/*
let hamster = {
    stomach: [],
    
    eat(food) {
        this.stomach = [food];
    }
}

let speedy = {
    __proto__ : hamster
};

let lazy = {
    __proto__: hamster
}

speedy.eat("apple")

console.log(speedy.stomach)

console.log(lazy.stomach)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//77. Find the error in prototypal inheritance below:

/*
function Animal(name) {
    this.name = name
}

Animal.prototype.walk = function() {
    console.log(`${this.name} walks!`)
}

function Rabbit(name) {
    this.name = name
}

Rabbit.prototype.__proto__ = Animal.prototype

Rabbit.prototype.walk = function() {
    console.log(`${this.name} bounces!`)
}

let animal = new Animal("elephant")

animal.walk()
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//78. Rewrite clock using prototypes.
/*
function Clock({template}) {
    
    this._template = template 
        
}
    
    Clock.prototype._render = function() {
    
    let date = new Date()
    
    let hours = date.getHours();
        if(hours< 10) hours = '0' + hours
        
        let mins = date.getMinutes();
        if(mins< 10) mins = '0' + mins
        
        let secs = date.getSeconds();
        if(secs< 10) secs    = '0' + secs
        
        let output = this._template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs)
        console.log(output)
    }
    
    Clock.prototype.stop =  function() {
        clearInterval(this._timer)
    }
    
    Clock.prototype.start = function() {
        this._render()
        this._timer = setInterval(() => this._render(), 1000)
    }

let clock = new Clock({template: 'h:m:s'})
//clock.start()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//79. Modify its prototype.
/*
function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    }
    
let rabbit = new Rabbit();
Rabbit.prototype = {}
console.log(rabbit.eats) // true because Rabbit.prototype affects only newly created objects but rabbit is already created. So, it will return true.
    

function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    }
    
let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
console.log(rabbit.eats) // rabbit object is assigned via reference. So, if we change the valure of Rabbit.prototype then the value of the oject which is referenced through that object, its value also changes. Hence, false.

function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    }
    
let rabbit = new Rabbit();
delete rabbit.eats;
console.log(rabbit.eats) // true The rabbit does noot have eats property it references the property from Rabbit object. So, delete cannot delete the property which is not present.

function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    }
    
let rabbit = new Rabbit();
delete Rabbit.prototype.eats
console.log(rabbit.eats)// because the main object property to which the other objects are referenced is deleted. So, it will reflect on to the referenced objects as well. So, undefined
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//80. Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know which one, but we’d like to create a new object using it.Can we do it like that? let obj2 = new obj.constructor()

// Right example
/*
function Rabbit(name) {
    this.name = name
}

let rabb = new Rabbit("Bugs")
let rabbie = new rabb.constructor("Bunny")
console.log(rabbie.name)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//81. Rewrite clock class to the modern "class" syntax.
/*
class Clock {
    constructor({template}) {
        this.template = template
    }
    
    render() {
        let date = new Date()
    
    let hours = date.getHours();
        if(hours< 10) hours = '0' + hours
        
        let mins = date.getMinutes();
        if(mins< 10) mins = '0' + mins
        
        let secs = date.getSeconds();
        if(secs< 10) secs    = '0' + secs
        
        let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs)
        console.log(output)
    }
    
    stop() {
        clearInterval(this.timer)
    }
    
    start() {
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }
}

let clock = new Clock({template : 'h:m:s'})
clock.start()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//82. There's a tree structured as nested ul/li.Write a code that for each <li> shows:

//1. What's the text inside it.
/*
let a = document.querySelectorAll('li')

for(let li of document.querySelectorAll('li')) {
    
    let text = li.firstChild.data
    console.log(text)
    console.log(li.getElementsByTagName('li'))
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//83. What does the script show?
/*
console.log(document.body.lastChild.nodeType) // 1 the last child is the script tag of which the value is 1. And at the time of execution even if there are nodes after that, the last child is script tag only.
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//84. 
/*

console.log(document.getElementById("age-table"))
console.log(document.getElementById("age-table").getElementsByTagName("label"))
console.log(document.getElementById("age-table").getElementsByTagName("td")[0])
console.log(document.getElementsByName("search"))

let input = document.getElementsByName("search")[0].getElementsByTagName("input")ba

console.log(document.getElementsByName("search")[0].getElementsByTagName("input")[0])
console.log(input[input.length - 1])
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------
//85.

/*
let button = document.getElementById("btn")

button.onclick = function() {
    
    document.getElementById("text").hidden = true
}

document.getElementById("self").onclick = function() {
    
    document.getElementById("self").hidden = true
}
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//86.
/*
document.getElementById("field").onclick = function(event) {
    
    let fieldcoords = this.getBoundingClientRect()
    console.log(fieldcoords)
    
    let ballcoords = {
        top: event.clientY - fieldcoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldcoords.left - field.clientLeft - ball.clientWidth / 2
    }
    
    //for top
    if(ballcoords.top<0){
           ballcoords.top = 0; 
        }
    //for left
    if(ballcoords.left<0) {
        ballcoords.left = 0;
    }
    
    //for right
    if(ball.clientWidth + ballcoords.left > field.clientWidth) {
        ballcoords.left = field.clientWidth -  ball.clientWidth
    }
    bottom
    //for 
    if(ball.clientHeight + ballcoords.top > field.clientHeight) {
        ballcoords.top = field.clientHeight -  ball.clientHeight
    }
    
    ball.style.top = ballcoords.top + 'px'
    ball.style.left = ballcoords.left + 'px'
    console.log(ballcoords.top)
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//87.
/*
function toggle() {
    let menu = document.getElementById("menu")
    
    if(menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//88.

//Done in index.html


//-------------------------------------------------------------------------------------------------------------------------------------------------

//89.
/*
function clear(elem) {
    console.log(document.getElementById("elem").parentNode.removeChild(elem))
}

clear(elem)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//90. Create a list
/*
function createList() {
let ul = document.createElement("UL")
document.body.append(ul)



while(true) {
let item = prompt("Enter an item")
 
    if(!item) {
        break
    }
    
    let li = document.createElement("LI")

    li.textContent = item
    
    ul.appendChild(li)
    }    
}

createList()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//91.  Create a tree list.
/*
let data = {
    
    "fish" : {
        "trout" : {},
        "salmon" : {}
    },
    
    "Tree" : {
      "Huge" : {
          "Sequoia" : {},
          "oak" : {}
      },
        "Flowering" : {
            "redbud" : {},
            "magnlia" : {}
        }
    }
}
function createTree(container, obj) {
    container.innerHTML = createTreeText(obj)
}

function createTreeText(obj) {
    let li = '';
    let ul;
    for(let key in obj) {
         li += '<li>' + key + createTreeText(obj[key]) + '</li>'
    }
    
    if(li) {
        ul = '<ul>' + li + '</ul>'
    }
    
    return ul || ''
}

createTree(container, data)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//92. Count the list elements.
/*
let list = document.getElementsByTagName('li')


for (let li of list) {
    
    let dCount = li.getElementsByTagName('li').length;
    if(!dCount) {
        continue;
    }
    
    li.firstChild.data += '[' + dCount + ']'
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//93. 
/*
function createCalendar(elem, year, month) {
    
    let mon = month - 1;
    let d = new Date(year, mon)
    
    console.log(d)
    
    let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>'
    
    for(i=0; i < getDay(d); i++){
        
        table += '<td></td>'
    }
    
    while(d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>'
        
        if(getDay(d)%7 == 6) {
            table += '</tr><tr>'
        }
        
        d.setDate(d.getDate() + 1)
        
    }
    
    if(getDay(d) != 0) {
        
        for(let i = getDay(d); i < 7; i++) {
            table += '<td></td>'
        }
    }
    
    table += '</tr></table>'
    
    elem.innerHTML = table
}


function getDay(date) {
    day = date.getDay();
    console.log(day)
    if(day == 0) day = 7
    return day - 1;
}

createCalendar(calendar, 2012, 9)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//94. 
/*
function updateClock() {
  
    date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    
    if(h < 10) {
        h = '0' + h
    }
    if(m < 10) {
        m = '0' + m
    }
    if(s < 10) {
        s = '0' + s
    }
    
    document.getElementById('hours').innerHTML  = date.getHours()
    document.getElementById('minutes').innerHTML  = date.getMinutes()
    document.getElementById('seconds').innerHTML  = s
    
    let timerId = setTimeout(updateClock, 500)
    
}

updateClock()
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//95. 
/*
let list = '<li>2</li><li>3</li>'

document.getElementById('one').insertAdjacentHTML('afterend', list)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//96. 
/*
let sortedRows = Array.from(document.getElementById("table").rows).slice(1)
                    .sort((rowA,rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1:-1);

table.tBodies[0].append(...sortedRows)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//98.
/*
    grid.onclick = function(e) {
        
        th = e.target
        if(th.tagName != 'TH') return;
        
        sortTable(th.cellIndex, th.dataset.type)
    }
    
    
    function sortTable(colNum, type) {
        
        let tbody = document.getElementById("grid").querySelector("tbody")
        
        let rowsArray = Array.from(tbody.rows)
        
        
        
        let compare;
        
        if(type == "number") {
            
            compare = function(rowA,rowB) {
                
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
                
                
            } 
            } else if(type == "string") {
                
                compare = function(rowA,rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1:-1;
                }
            }
        
        rowsArray.sort(compare)
        tbody.append(...rowsArray)
        }
  
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//99. 
/*
   let tooltipElem;

    

    document..onmouseover = function(event) {
      let target = event.target;
        console.log(target)

      
      let tooltipHtml = target.dataset.tooltip;
        console.log(tooltipHtml)
      if (!tooltipHtml) return;

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      
      let coords = target.getBoundingClientRect();
        

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; 
        

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };
    */

//-------------------------------------------------------------------------------------------------------------------------------------------------

//100. 

//Done in html


//-------------------------------------------------------------------------------------------------------------------------------------------------

//101. 
/*
function handler() {
    
    alert("...")
    return false;
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//102. 
/*
document.getElementById("contents").onclick = function(event) {
    
    function handleLink(href) {
        
        let isLeaving = confirm("Are you sure?")
        
        if(!isLeaving) return false;
    }
    
    let target = event.target.closest('a')
    
    console.log(target)
    
    if(target && contents.contains(target)) {
        
        return handleLink(target.getAttribute('href'))
    }
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//103. 
/*
document.getElementById("thumbnail").onclick = function(event) {
    
    let target = event.target.closest('a')
    
    if(!target) return;
    showImage(target.href)
    event.preventDefault();
}

function showImage(href) {
        document.getElementById("largeImg").src = href
        
    }
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//104.
/*
function runOnKeys(func, ...codes) {
      let pressed = [];

      document.addEventListener('keydown', function(event) {
        pressed.push(event.code);

        for (let code of codes) { // are all keys in the set?
          if (!pressed.includes(code)) {
            return;
          }
        }

        pressed = [];

        func();
      });
    
//    document.addEventListener('keyup', function(event) {
//        
//        let index = pressed.indexOf(event.code)
//        
//        if(index > -1) {
//            pressed.splice(index, 1)
//        }
//    })
}
    
    runOnKeys(
      () => alert("Hello!"),
      "KeyQ",
      "KeyW"
    );
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//106.
/*
document.onmouseover = function(event) {
    
    
    let tooltip;
    let target = event.target.closest('[data-tooltip]')
    
//    console.log(target);
    
    if(!target) return;
    
    tooltip = showTooltip(target, target.dataset.tooltip)
//    console.log(tooltip)
//        
}


document.onmouseout = function() {
    
    if(tooltip) {
      tooltip.remove()
      tooltip = false;
    }
}

function showTooltip(target, data) {
        
        let element = document.createElement('div')
        element.className = 'tooltip';
        element.innerHTML = data
        document.body.append(element)
    
    console.log(target);
    
    let coords = target.getBoundingClientRect()
    
    console.log(coords);
    console.log(target.offsetWidth);
    console.log(target.offsetHeight);
    console.log(element.offsetWidth);
    
    let left = coords.left + ((target.offsetWidth - element.offsetWidth)/2)
    if(left<0) left = 0;
    
    let top = coords.top - target.offsetHeight - 5
    if(top < 0) {
        top = coords.top + target.offsetHeight + 5
    }
        
        element.style.left = left + 'px'
        element.style.top = top + 'px'
        
        console.log(element.style.left);
        console.log(element.style.top);
        
        return element;
    
    }
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//108.
/*
let thumb = slider.querySelector('.thumb')


thumb.onmousedown = function(event) {
    
    event.preventDefault()
    
    let shiftX = event.clientX - thumb.getBoundingClientRect().left
    
    document.addEventListener('mousemove', onmousemove)
    document.addEventListener('mouseup', onmouseup)
    
    
    function onmousemove(event) {
        
        let newleft = event.clientX - shiftX - slider.getBoundingClientRect().left
        
        if(newleft<0) {
            newleft = 0
        }
        
        console.log(event.clientX)
        
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if(newleft > rightEdge) {
            newleft = rightEdge
        }
        
        thumb.style.left = newleft + 'px'
        
    }
    
    function onmouseup() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//109.
/*
console.log(genres.value)

let option = new Option("Classic","classic")

genres.append(option)

option.selected = true
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//110.
/*
let area = null

let view = document.getElementById("view")

view.onclick = function() {
    editStart()
}

function editStart() {
    area = document.createElement("textarea")
    area.className = 'edit'
    area.value = view.innerHTML;
    
    area.onkeydown = function(event) {
        if(event.key == 'Enter') {
            this.blur()
        }
    }
    
    area.onblur = function() {
        editEnd();
    }
    
    view.replaceWith(area)
    area.focus();
}

function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view)
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//111.
/*
let editingTd;

let table = document.getElementById('table')

table.onclick = function(event) {
    let target = event.target.closest('.edit-cancel,.edit-ok,td')
    
    if(!table.contains(target)) return;
    
    if(target.className == 'edit-cancel') {
        
        finishTdEdit(editingTd.elem, false)
        
    } else if(target.className == 'edit-ok') {
        
        finishTdEdit(editingTd.elem, true)
        
    } else if(target.nodeName == 'TD') {
        
        if(editingTd) return;
        
        makeTdEditable(target)
    }
}

function makeTdEditable(td) {
    editingTd = {
        elem: td,
        data: td.innerHTML
    };
    
    td.classList.add('edit-td')
    
    let textarea = document.createElement('textarea')
    textarea.style.width = td.clientWidth + 'px'
    textarea.style.height = td.clientHeight + 'px'
    textarea.className = 'edit-area';
    
    textarea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textarea);
    textarea.focus();
    
    td.insertAdjacentHTML("beforeEnd", '<div class = "edit-controls"><button class = "edit-ok">OK</button><button class = "edit-cancel">CANCEL</button></div>')
}

function finishTdEdit(td, isOk) {
    if(isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = editingTd.data
    }
    
    td.classList.remove('edit-td');
    editingTd = null
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//112.
/*
deposit.oninput = calculate
months.onchange = calculate

interest.oninput = calculate

function calculate() {
    
    let initial = document.getElementById('deposit').value
    if(!initial) return;
    
    let interest = document.getElementById('interest').value * 0.01
    if(!interest) return;
    
    let years = document.getElementById('months').value/12
    
    document.getElementById('result').innerHTML = Math.round(initial * (1 + interest*years))
}
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//113. 

/*
function showCover() {
    
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';

      document.body.style.overflowY = 'hidden';

      document.body.append(coverDiv);
    }

    function hideCover() {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    }

    function showPrompt(text, callback) {
      showCover();
      let form = document.getElementById('prompt-form');
      let container = document.getElementById('prompt-form-container');
      document.getElementById('prompt-message').innerHTML = text;
      form.text.value = '';

      function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
      }

      form.onsubmit = function() {
        let value = form.text.value;
        if (value == '') return false; // ignore empty submit

        complete(value);
        return false;
      };

      form.cancel.onclick = function() {
        complete(null);
      };

      document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
      };

      let lastElem = form.elements[form.elements.length - 1];
      let firstElem = form.elements[0];

      lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
      };

      firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
          lastElem.focus();
          return false;
        }
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }

    document.getElementById('show-button').onclick = function() {
      showPrompt("Enter something<br>...smart :)", function(value) {
        alert("You entered: " + value);
      });
    };
   */


//-------------------------------------------------------------------------------------------------------------------------------------------------

//114 & 115.
/*
jet.onclick = function() {
    this.style.width='500px';
    this.style.height='500px';
}

let ended = false;

jet.addEventListener('transitionend', function() {
    if(!ended) {
        ended = true;
        alert("Done!")
    }
})
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//116.

/*
function showCircle(cx,cy,rad) {
    let div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.className = 'circle';
    
    document.body.append(div);
    
    setTimeout(() => {
        div.style.width = rad*2 + 'px';
        div.style.height = rad*2 + 'px';
    },0)
}
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//117.

/*
function makeEaseOut(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    }

    function bounce(timeFraction) {
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

    let bounceEaseOut = makeEaseOut(bounce);

    ball117.onclick = function() {
        
        pos = field117.clientHeight - ball117.clientHeight
        
      animate({
        duration: 3000,
        timing: bounceEaseOut,
        draw: function(progress) {
          ball117.style.top = pos * progress + 'px';
        }
      });
    };

function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {

    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    var progress = options.timing(timeFraction)
    
    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//118.
/*
function makeEaseOut(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    }

    function bounce(timeFraction) {
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

    function quad(timeFraction) {
        return Math.pow(timeFraction, 2)
    }

    let bounceEaseOut = makeEaseOut(bounce);

    ball117.onclick = function() {
        
        pos = field117.clientHeight - ball117.clientHeight
        let width = 100;
        
      animate({
        duration: 3000,
        timing: bounceEaseOut,
        draw: function(progress) {
          ball117.style.top = pos * progress + 'px';
        }
      });
        
      animate({
          duration: 3000,
          timing: makeEaseOut(quad),
          draw: function(progress) {
              ball117.style.left = width*progress + 'px'
          }
      })
    };

function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction)
    
    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//119.

/*
let reg = /Java(Script)?|PHP|C(\+\+)?/g;
    
alert("Java JavaScript PHP C C++".match(reg))
*.*\[(url|bb|quote)\]/
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//120.
/*
let reg = /\[(url|b|quote)\][\s\S]*?\[\/\1\]/g;

    
let str = "..[url]http://google.com[/url]"

alert(str.match(reg))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//121.
/*
reg = /"(\\.|[^"\\])*"/g

str = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';

alert(str.match(reg))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//122.
/*
reg = /<style(>|\s.*?>)/g

str = '<style> <styler> <style test="...">'

alert(str.match(reg))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//126.
/*
reg = /\.{3,}/g

str = "Hello!... How goes?....."

alert(str.match(reg))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//127.
/*
reg = /#[0-9a-fA-F]{6}\b/gi

str = "color: #121212; background-color:#AA00ef; bad-colors:f#fddee #fd2 #12345678"
alert(str.match(reg));
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//128.

//reg = /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/i;
//
//alert(reg.test('01:32:54:67:89:AB'));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//129.

//reg = /\b[0-2][0-9]:[0-5][0-9]\b/;
//
//str = "Breakfast at 09:00 in the room 123:456";
//
//alert(str.match(reg));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//130.

//let reg = /<!--[\s\S]*?-->/g;
//    
//let str =`...<!-- My -- comment
//test -->; .. <!---->; ..`
//
//alert(str.match(reg))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//131.

//let reg = /<[^<>]+>/g;
//
//let str = '<> <a href="/"> <input type="radio" checked> <b>';
//
//alert(str.match(reg))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//132.

//let str = `1st place: Winnie
//2nd place: Piglet
//33rd place: Eeyore`
//
//alert(str.match(/\w+$/gim))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//133.

//let reg = /#([0-9a-fA-F]{3}){1,2}\b/g;
//    
//let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
//
//alert(str.match(reg));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//134.

//let reg = /[1-9]\d*(\.\d+)?/g;
//
//
//let str = "1.5 0 -5 12. 123.4."
//
//alert(str.match(reg))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//135. 

//let reg = /-?\d+(?:\.\d+)?/g
//
//str = "-1.5 0 2 -123.4"
//
//alert(str.match(reg))

//-------------------------------------------------------------------------------------------------------------------------------------------------

//136.

//function parse(expr) {
//    let reg = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
//    
//    let result = expr.match(reg);
//    
//    console.log(result)
//    
//    if(!result) return [];
//    result.shift()
//    
//    return result;
//}
//
//alert(parse("-1.23 * 3.45"))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//138.

//function launch() {
//    showCircle(150,150,100, div => {
//              div.classList.add('message-ball');
//              div.append("Hello World")})
//
//
//function showCircle(cx,cy,rad, callback) {
//    let div = document.createElement("div");
//    div.style.width = 0;
//    div.style.height = 0;
//    div.style.left = cx + "px";
//    div.style.top = cy + "px";
//    div.className = 'circle';
//    
//    document.body.append(div);
//    
//    setTimeout(() => {
//        div.style.width = rad*2 + 'px';
//        div.style.height = rad*2 + 'px';
//        
//        div.addEventListener('transitionend', function handler() {
//            div.removeEventListener('transitionend',handler)
//            callback(div)
//        })
//    },0)
//}
//}


//-------------------------------------------------------------------------------------------------------------------------------------------------

//139.

//function delay(ms) {
//    return new Promise(function(resolve){
//        setTimeout(resolve, ms)
//    })
//}
//
//delay(3000).then(() => alert('runs after 3 seconds'))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//140.

//function launch() {
//    showCircle(150,150,100).then (div => {
//              div.classList.add('message-ball');
//              div.append("Hello World")})
//
//
//function showCircle(cx,cy,rad, callback) {
//    let div = document.createElement("div");
//    div.style.width = 0;
//    div.style.height = 0;
//    div.style.left = cx + "px";
//    div.style.top = cy + "px";
//    div.className = 'circle';
//    
//    document.body.append(div);
//    
//    return new Promise(function(resolve) {
//        setTimeout(() => {
//        div.style.width = rad*2 + 'px';
//        div.style.height = rad*2 + 'px';
//        
//        div.addEventListener('transitionend', function handler() {
//            div.removeEventListener('transitionend',handler)
//            resolve(div)
//        })
//    },0)
//    })
//}
//}


//-------------------------------------------------------------------------------------------------------------------------------------------------

//141.

//let urls = [
//    'https://api.github.com/users/iliakan',
//    'https://api.github.com/users/remy',
//    'http://no-such-url'
//]
//
//Promise.all(
//    urls.map(url => fetch(url).catch(err=> err)))
//.then(responses => {
//    alert(responses[0].status)
//    alert(responses[1].status)
//    alert(responses[2])
//})


//-------------------------------------------------------------------------------------------------------------------------------------------------

//142.
/*
let urls = [
  'https://api.github.com/users/iliakan',
  '/',
  'https://no-such-url'
];

// make fetch requests
Promise.all(urls.map(url => fetch(url).catch(err => err)))
  // map each response to response.json()
  .then(responses => Promise.all(
    responses.map(r => r instanceof Error? r: r.json().catch(err => err))
  ))
  // show name of each user
  .then(users => {  // (*)
    alert(users[0].name)
    alert(users[1])
    alert(users[2])
  });
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//143.

//class HttpError extends Error {
//  constructor(response) {
//    super(`${response.status} for ${response.url}`);
//    this.name = 'HttpError';
//    this.response = response;
//  }
//}
//
//async function loadJson(url) {
//  response = await fetch(url) 
//      if (response.status == 200) {
//        return response.json();
//      } else {
//        throw new HttpError(response);
//      }
//}
//
//// Ask for a user name until github returns a valid user
//async function demoGithubUser() {
//  let name = prompt("Enter a name?", "iliakan");
//
//    while(true) {
//        try {
//            user = await loadJson(`https://api.github.com/users/${name}`);
//            break;
//        }
//        catch(err) {
//            if (err instanceof HttpError && err.response.status == 404) {
//            alert("No such user, please reenter.");
//            return demoGithubUser();
//          } else {
//            throw err;
//            }
//        };
//    }
//    
//    alert(`Full Name: ${user.name}`);
//    return user;
//}
//
//demoGithubUser();


//-------------------------------------------------------------------------------------------------------------------------------------------------

//144.

//async function loadJson(url) {
//  let response = await fetch(url)
//    
//      if (response.status == 200) {
//        return response.json();
//      } else {
//        throw new Error(response.status);
//      }
//}
//
//loadJson('no-such-user.json')
//  .catch(alert);


//-------------------------------------------------------------------------------------------------------------------------------------------------

//145.

//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
//var i;
//for(i=0; i<360; i+= 20){
// ctx.moveTo(i+5,180);
//    ctx.lineTo(i,180);
//
//}
//ctx.stroke();
//
//var counter = 0, x=0,y=180;
//
//
////100 iterations
//var increase = 90/180*Math.PI / 9;
//for(i=0; i<=360; i+=10){
//    
//     ctx.moveTo(x,y);
//    x = i;
//    y =  180 - Math.sin(counter) * 120;
//counter += increase;
//     
//    ctx.lineTo(x,y);
//    ctx.stroke();
//    //alert( " x : " + x + " y : " + y + " increase : " + counter ) ;
//
//}


//-------------------------------------------------------------------------------------------------------------------------------------------------

//147.

//const csv_to_array = (data, delimiter) =>
//  data
//    .split('\n')
//    .map(v => v.split(delimiter));
//
//console.log(csv_to_array('a,b\nc,d', ',')); 
//console.log(csv_to_array('a;b\nc;d', ';')); 
//console.log(csv_to_array('head1,head2\na,b\nc,d', ','));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//148.

//const CSV_to_JSON = (data, delimiter = ',') => {
//  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
//  console.log(titles)
//  return data
//    .slice(data.indexOf('\n') + 1)
//    .split('\n')
//    .map(v => {
//      const values = v.split(delimiter);
//      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
//    });
//};
//console.log(CSV_to_JSON('col1,col2\na,b\nc,d'));
//console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';'));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//149.

/*
function convertToArray(num) {
    let n = num.toString();
    
    let arr = n.split('')
    console.log(arr)
}

convertToArray(123)
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//150.

//const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
//console.log(powerset([1, 2]));
//console.log(powerset([1, 2, 3]));
//console.log(powerset([1, 2, 3, 4]));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//151.
/*
function numAt(arr,index) {
    let filteredArr= [];
    
        for(i=0;i<arr.length;i++) {
            for(j=0;j<index.length;j++) {
                if(!filteredArr.includes(arr[index[j]])) {
                    filteredArr.push(arr[index[j]])
                }
        } 
    }
    console.log(filteredArr)
    
}

numAt([1,2,3,4],[1,3])
numAt([1,2,3,4],[2])
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//152.
/*
    var letters = "0123456789ABCDEF"; 

	var color = '#'; 

	for (var i = 0; i < 6; i++) {
	color += letters[(Math.floor(Math.random() * 16))]; 
    console.log(Math.floor(Math.random() * 16))
    }

console.log(color);
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//153.

//function remove_non_ascii(str) {
//  
//  if ((str===null) || (str===''))
//       return false;
// else
//   str = str.toString();
//  
//    //hexadecimal codes start from x20 to x7E in ascii
//  return str.replace(/[^\x20-\x7E]/g, '');
//}
//
//console.log(remove_non_ascii('äÄçÇéÉêSHANTANUöÖÐþúÚ'));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//154.

/*
function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

console.log(lengthInUtf8Bytes("Sh antan u"))
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//155.

//function renameObjKeys(keysMap, obj) {
//    console.log(Object.keys(obj).reduce(
//        (acc, key) => ({
//            ...acc,
//            ...{ [keysMap[key] || key]: obj[key]}
//        }),
//        {}
//    ))
//}
//
//obj = { name: 'Bobo', job: 'Programmer', shoeSize: 10}
//renameObjKeys({name: "firstName", job: "Actor"}, obj)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//156.

//const sortArr = (arr, comparator = (a, b) => a - b) =>
//arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
//console.log(sortArr([1, 3, 2])); 
//console.log(sortArr([10, 30, 20], (a, b) => b - a));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//157.

//const all = (arr, fn = Boolean) => arr.every(fn);
//console.log(all([4, 2, 3], x => x > 1)); 
//console.log(all([4, 2, 3], x => x < 1));
//console.log(all([1, 2, 3]));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//158.
 
//const bifurcate = (arr, filter) =>
//arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
//console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
//console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
//console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//159.

//function remove_from_left(arr, n = 1){
//  return arr.slice(n); 
//}
//console.log(remove_from_left([1, 2, 3]));
//console.log(remove_from_left([1, 2, 3], 1));
//console.log(remove_from_left([1, 2, 3], 2));
//console.log(remove_from_left([1, 2, 3], 4));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//160.

//function remove_from_right(arr, n = 1){
//  return arr.slice(n); 
//}
//console.log(remove_from_right([1, 2, 3]));
//console.log(remove_from_right([1, 2, 3], -1));
//console.log(remove_from_right([1, 2, 3], -2));
//console.log(remove_from_right([1, 2, 3], -4));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//161.
/*
const hexExpand = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

console.log(hexExpand('#03f'));
console.log(hexExpand('05a'));
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------

//162.

//const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)
//
//console.log(every_nth([1,2,3,4,5,6], 2))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//163.
/*
function uniqueValues(arr) {
    console.log(arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i)))
}

uniqueValues([1,2,2,3,4,4,5])
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//164.
/*
function decapitalize(str) {
    console.log(str.slice(0,1).toLowerCase() + str.slice(1,str.length))
}

decapitalize('Hello')
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//165.



//-------------------------------------------------------------------------------------------------------------------------------------------------

//166.
/*
function yesNo(inp) {
    if(inp.toLowerCase() === "y" || inp.toLowerCase() === "yes") {
        return true
    } else if(inp.toLowerCase() === "n" || inp.toLowerCase() === "no") {
        return false
    } else {
        return "Please enter valid input"
    }
}

console.log(yesNo("Yes"))
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//167.
 
//const union_With = (a, b, comp) => 
//
//  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
//
//console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
//console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//168.

//function timeReq(func) {
//    
//    var t0 = performance.now();
//    
//    func();
//    
//    var t1 = performance.now();
//    
//    console.log("Time taken is " + (t1 - t0) + " ms" )
//    
//}
//
//timeReq(() => Math.pow(2,10))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//169.

//const to_Safe_Integer = num =>
// Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
//
//console.log(to_Safe_Integer('5.2'));
//console.log(to_Safe_Integer('5.52'));
//console.log(to_Safe_Integer(Infinity));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//170.

//function filterElem(arr, ...args) {
//    
//    console.log(arr.filter(a => !args.includes(a)))
//}
//
//filterElem([2,1,2,3], 1,2)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//171.

//function numReverse(num) {
//    numStr = num.toString()
//    console.log(numStr)
//    let rev = numStr
//                    .split('')
//                    .reverse()
//                    .join('')
//    console.log(+rev)
//}
//
//numReverse(32243)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//172.

//function palindrome(str) {
//    
//    if(str === "") {
//        console.log("Empty String")
//    } else {
//        strSpace = str.split(" ").join('')
//    console.log(strSpace)
//    
//    let revStr = strSpace
//                    .split('')
//                    .reverse()
//                    .join('')
//    
//    console.log(revStr)
//    
//    if(strSpace === revStr) {
//        console.log('Palindrome')
//    } else {
//        console.log("Not a palindrome")
//    }
//    }
//}
//
//palindrome("nurses run")


//-------------------------------------------------------------------------------------------------------------------------------------------------

//173.

/*
function combinations(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

combinations("dog");
*/

//-------------------------------------------------------------------------------------------------------------------------------------------------

//174.

//function alphabetical(str) {
//    let alpha = str.split('').sort().join('')
//    console.log(alpha)
//}
//
//alphabetical("webmaster")


//-------------------------------------------------------------------------------------------------------------------------------------------------

//175.

//function capitalize(sent) {
//    arr = sent.split(" ")
//    
//    let newSent = "";
//    
//    for(let i=0; i< arr.length;i++) {
//        
//        newSent+= arr[i][0].toUpperCase() + arr[i].substring(1,arr[i].length) + " "
//    }
//    
//    console.log(newSent)
//}
//
//capitalize("the quick brown fox.")


//-------------------------------------------------------------------------------------------------------------------------------------------------

//176.

//function longestWord(str) {
//    let arr = str.split(" ")
//    sortedArr = arr.sort((a,b) => b.length - a.length)
//    console.log(sortedArr[0])
//}
//
//longestWord("Spanidea Systems Private Limited")


//-------------------------------------------------------------------------------------------------------------------------------------------------

//177.

//function findVowels(str) {
//    let arr = str.split("")
//    let count = 0
//    console.log(arr)
//    
//    for(i=0;i<arr.length;i++) {
//        if( /^[aeiou]$/i.test(arr[i])) {
//            count+=1;
//        }
//    }
//    
//    console.log(count)
//}
//
//findVowels("The quick brown fox")


//-------------------------------------------------------------------------------------------------------------------------------------------------

//178.

//function primeNum(num) {
//    if(num> 1) {
//        for(i=2; i<=num/2;i++) {
//            if(num%i === 0) {
//                return "Not a prime Number"
//                
//            }
//        } 
//        
//        return "Prime Number"
//    } else {
//        return "Enter number greater than 1"
//    }
//}
//
//console.log(primeNum(2))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//179.

//function identityMatrix(n) {
//    arr =[]
//    for(i=0;i<n;i++) {
//        for(j=0;j<n;j++) {
//            if(i===j) {
//                console.log(1)
//            } else {
//                console.log(0)
//            }
//        }
//        console.log("------------------------------------")
//    }
//}
//
//identityMatrix(3)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//180.

//function findSecond(arr) {
//    arr.sort()
//    console.log(arr[1], arr[arr.length - 2])
//}
//
//findSecond([0,1,2,9,3,6])


//-------------------------------------------------------------------------------------------------------------------------------------------------

//181.



//function findPerfect(num) {
//    let sum = 0;
//   for(i=1;i<=num/2;i++) {
//       if(num%i === 0) {
//           sum+=i
//       }
//   }
//    
//    if(num === sum) {
//        console.log("Perfect Number")
//    } else {
//        console.log("Not a perfect Number")
//    }
//}
//
//findPerfect(8128)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//182.

//function amountTocoins(amount, coins) 
//{
// if (amount === 0) 
//  {
//     return [];
//   } 
// else
//   {
//     if (amount >= coins[0]) 
//       {
//        left = (amount - coins[0]);
//           
//        return [coins[0]].concat( amountTocoins(left, coins) );
//        } 
//      else
//        {
//         coins.shift();
//         return amountTocoins(amount, coins);
//        }
//    }
//} 
//console.log(amountTocoins(46, [25, 10, 5, 2,1]));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//183.

//function nthPower(b,n) {
//    let product = 1;
//    for(i=0;i<n;i++) {
//        product*=b
//    }
//    console.log(product)
//    
//}
//
//nthPower(3,5)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//184.

//function uniqChar(str1) {
//    var str=str1;
//     var uniql="";
//     for (var x=0;x < str.length;x++)
//     {
//
//     if(uniql.indexOf(str.charAt(x))==-1)
//      {
//      uniql += str[x];  
//
//       }
//      }
//      return uniql;
//}
//
//console.log(uniqChar("Thequickbrownfoxjumpsoverthelazydog"))



//-------------------------------------------------------------------------------------------------------------------------------------------------

//185.

//function Char_Counts(str1) {
//var uchars = {};
//str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
//return uchars;
//}
//console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));



//-------------------------------------------------------------------------------------------------------------------------------------------------

//186.

//function binarySearch(arr,element) {
//  let pos = Math.floor(arr.length/2)
//  
//  if(arr[pos]=== element) {
//      return pos;
//  } else if(arr.length === 1) {
//      return null;
//  } else if(arr[pos] < element) {
//      let arr1 = arr.slice(pos + 1)
//      let res = binarySearch(arr1, element);
//      if(res === null) {
//          return null;
//      } else {
//          return pos + 1 + res
//      }
//  } else {
//      let arr2 = arr.slice(0,pos);
//      return binarySearch(arr2, element)
//  }
//}
//
//let arr = [1,2,3,5,6,7,10,11,14,15,17,19,20,22,23]
//console.log(binarySearch(arr,6))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//187.

//function greaterThan(arr, num) {
//    let newArr = []
//    for(let i=0;i<arr.length;i++) {
//        if(arr[i] > 10) {
//            newArr.push(arr[i])
//        }
//    }
//    
//    return newArr;
//}
//
//arr = [11,45,4,31,64,10]
//
//console.log(greaterThan(arr, 10))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//188.

//function generateStr(l) {
//    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz0123456789";
//    
//    let id = ""
//    for(i=0;i<l;i++) {
//        
//        id+= charList[Math.floor(Math.random()* charList.length)]
//    }
//    console.log(id)
//}
//
//generateStr(8)


//-------------------------------------------------------------------------------------------------------------------------------------------------

//189.

//function numberOfOccurences(str, letter) {
//    let count =0 
//    for(let i=0;i<str.length;i++) {
//        if(str[i] === letter) {
//            count+=1
//        }
//    }
//    console.log(count)
//}
//
//numberOfOccurences('w3resource.com', 'o')


//-------------------------------------------------------------------------------------------------------------------------------------------------

//190.

//function firstCharacter(str){
//  var char;
//
//  for(var i = 0; i < str.length; i++){
//      console.log(str.indexOf(str[i]), str.lastIndexOf(str[i]))
//    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//      char = str[i];
//      break;
//    }
//  }
//
//  return char;
//}
//
//console.log(firstCharacter('abacddbec'))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//191.

//function bubble_Sort(a)
//{
//    var swapp;
//    var n = a.length-1;
//    var x=a;
//    do {
//        swapp = false;
//        for (var i=0; i < n; i++)
//        {
//            if (x[i] < x[i+1])
//            {
//                console.log(x[i],x[i+1])
//               var temp = x[i];
//               x[i] = x[i+1];
//               x[i+1] = temp;
//               swapp = true;
//            }
//        }
//        n--;
//    } while (swapp);
// return x; 
//}
//
//console.log(bubble_Sort([5,1,4,2,8]));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//192.

//function longest_substring_without_repeating_characters(input) {
//    var chars = input.split('');
//    var curr_char;
//    var str = "";
//    var longest_string = "";
//    var hash = {};
//    for (var i = 0; i < chars.length; i++) {
//        curr_char = chars[i];
//        console.log(hash)
//            if (!hash[chars[i]]) 
//            { 
//                str += curr_char; 
//                hash[chars[i]] = {index:i};
//            }
//            else 
//            {
//            if(longest_string.length <= str.length)
//            {
//                longest_string = str;
//            }
//                var prev_dupeIndex = hash[curr_char].index;
//                var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
//                str = str_FromPrevDupe + curr_char;
//                hash = {};
//            for (var j = prev_dupeIndex + 1; j <= i; j++) {
//                hash[input.charAt(j)] = {index:j};
//                }
//            }
//    }
//    return longest_string.length > str.length ? longest_string : str;
//    }
//console.log(longest_substring_without_repeating_characters("google.com")); 
//
//console.log(longest_substring_without_repeating_characters("example.com"));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//194.

//function gcd(a,b) {
//    if(!b) {
//        return a;
//    }
//    
//    return gcd(b, a % b)
//}
//
//console.log(gcd(90, 12))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//195.

//function range(x,y){
//    var results = [];
//    if(x === y){
//        return results;
//    }
//    results.push(x);
//return  results.concat(range(x + 1,y));
//}
//
//console.log(range(2,9));





//-------------------------------------------------------------------------------------------------------------------------------------------------

//197.

function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

quickSort([11,8,14,3,6,2,7],0,6); 

//function mergeSort (arr) {
//  if (arr.length === 1) {
//    // return once we hit an array with a single item
//    return arr
//  }
//
//  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
//  const left = arr.slice(0, middle) // items on the left side
//  const right = arr.slice(middle) // items on the right side
//
//  return merge(
//    mergeSort(left),
//    mergeSort(right)
//  )
//}
//
//// compare the arrays item by item and return the concatenated result
//function merge (left, right) {
//  let result = []
//  let indexLeft = 0
//  let indexRight = 0
//
//  while (indexLeft < left.length && indexRight < right.length) {
//    if (left[indexLeft] < right[indexRight]) {
//      result.push(left[indexLeft])
//      indexLeft++
//    } else {
//      result.push(right[indexRight])
//      indexRight++
//    }
//  }
//
//  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
//}
//
//const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
//console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]


//-------------------------------------------------------------------------------------------------------------------------------------------------

//197.

//function quickSort(arr, left, right){
//   var len = arr.length, 
//   pivot,
//   partitionIndex;
//
//
//  if(left < right){
//    pivot = right;
//    partitionIndex = partition(arr, pivot, left, right);
//    
//   //sort left and right
//   quickSort(arr, left, partitionIndex - 1);
//   quickSort(arr, partitionIndex + 1, right);
//  }
//  return arr;
//}
//
//function partition(arr, pivot, left, right){
//   var pivotValue = arr[pivot],
//       partitionIndex = left;
//
//   for(var i = left; i < right; i++){
//    if(arr[i] < pivotValue){
//      swap(arr, i, partitionIndex);
//      partitionIndex++;
//    }
//  }
//  swap(arr, right, partitionIndex);
//  return partitionIndex;
//}
//
//function swap(arr, i, j){
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//}
//
//console.log(quickSort([11,8,14,3,6,2,7],0,6));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//198.

//function heapSort(array) {
//  // Build our max heap.
//  buildMaxHeap(array);
//
//  // Find last element.
//  lastElement = array.length - 1;
//
//  // Continue heap sorting until we have
//  // just one element left in the array.
//  while(lastElement > 0) {
//    swap(array, 0, lastElement);
//
//    heapify(array, 0, lastElement);
//
//    lastElement -= 1
//  }
//}
//
//function buildMaxHeap(array) {
//  var i;
//  i = array.length / 2 - 1;
//  i = Math.floor(i);
//
//  // Build a max heap out of
//  // all array elements passed in.
//  while (i >= 0) {
//    heapify(array, i, array.length);
//    i -= 1;
//  }
//}
//
//function heapify(heap, i, max) {
//  var index, leftChild, righChild;
//  
//  while(i < max) {
//    index = i;
//
//    leftChild = 2*i + 1;
//    righChild = leftChild + 1;
//
//    if (leftChild < max && heap[leftChild] > heap[index]) {
//      index = leftChild;
//    }
//
//    if (righChild < max && heap[righChild] > heap[index]) {
//      index = righChild;
//    }
//      
//    if (index == i) {
//      return;
//    }
//
//    swap(heap,i, index);
//    
//    i = index;
//  }
//}
//
//function swap(array, firstItemIndex, lastItemInde) {
//  var tmp = array[firstItemIndex];
//  
//  // Swap first and last items in the array.
//  array[firstItemIndex] = array[lastItemInde];
//  array[lastItemInde] = tmp;
//}
//
//
//console.log(heapSort([3,19,1,4,8,7]))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//199.

//function insertionSort (items) {
//  for (var i = 0; i < items.length; i++){
//    let value = items[i]
//    // store the current item value so it can be placed right
//    for (var j = i - 1; j > -1 && items[j] > value; j--) {
//      // loop through the items in the sorted array (the items from the current to the beginning)
//      // copy each item to the next one
//      items[j + 1] = items[j]
//    }
//    // the last item we've reached should now hold the value of the currently sorted item
//    items[j + 1] = value
//  }
//
//  return list
//}
//
//const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
//console.log(list[-1])
//console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]


//-------------------------------------------------------------------------------------------------------------------------------------------------

//200.

//function selectionSort(items){
//
//    var len = items.length,
//        min;
//
//    for (i=0; i < len; i++){
//
//        //set minimum to this position
//        min = i;
//
//        //check the rest of the array to see if anything is smaller
//        for (j=i+1; j < len; j++){
//            if (items[j] < items[min]){
//                min = j;
//            }
//        }
//
//        //if the minimum isn't in the position, swap it
//        if (i != min){
//            swap(items, i, min);
//        }
//    }
//
//    return items;
//}
//
//function swap(items, firstIndex, secondIndex){
//    var temp = items[firstIndex];
//    items[firstIndex] = items[secondIndex];
//    items[secondIndex] = temp;
//}
//
//console.log(selectionSort([54, 26, 93, 17, 77, 31, 44, 55, 20]))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//201.

//function shellSort(arr) {
//    var increment = arr.length / 2;
//    while (increment > 0) {
//        for (i = increment; i < arr.length; i++) {
//            var j = i;
//            var temp = arr[i];
//    
//            while (j >= increment && arr[j-increment] > temp) {
//                arr[j] = arr[j-increment];
//                j = j - increment;
//            }
//    
//            arr[j] = temp;
//        }
//    
//        if (increment == 2) {
//            increment = 1;
//        } else {
//            increment = parseInt(increment*5 / 11);
//        }
//    }
//  return arr;
//}
//
//console.log(shellSort([54, 26, 93, 17, 77, 31, 44, 55, 20]));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//202.

//let arr = [54, 26, 93, 17, 77, 31, 44, 55, 20]
//let isSorted = true;
//while (isSorted){
//    for (let i = 0; i< arr.length - 1;i++){
//            if (arr[i] > arr[i + 1])
//             {
//                let temp = arr[i];
//                arr[i] = arr[i + 1];
//                arr[i+1] = temp;
//                isSorted = true;
//             }
//    }
// 
//    if (!isSorted)
//        break;
// 
//    isSorted = false;
// 
//    for (let j = arr.length - 1; j > 0; j--){
//            if (arr[j-1] > arr[j])
//             {
//                let temp = arr[j];
//                arr[j] = arr[j - 1];
//                arr[j - 1] = temp;
//                isSorted = true;
//             }
//    }
//}
//console.log(arr);
 

//-------------------------------------------------------------------------------------------------------------------------------------------------

//203.

//function combSort(arr)
//{
// function is_array_sorted(arr) {
//      var sorted = true;
//      for (var i = 0; i < arr.length - 1; i++) {
//          if (arr[i] > arr[i + 1]) {
//              sorted = false;
//              break;
//          }
//      }
//      return sorted;
//  }
// 
//  var iteration_count = 0;
//  var gap = arr.length - 2;
//  var decrease_factor = 1.25;
// 
//  // Repeat iterations Until array is not sorted
//  
//  while (!is_array_sorted(arr)) 
//  {
//      // If not first gap  Calculate gap
//      if (iteration_count > 0)
//         gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);
// 
//  // Set front and back elements and increment to a gap
//      var front = 0;
//      var back = gap;
//      while (back <= arr.length - 1) 
//      {
//          // Swap the elements if they are not ordered
//        
//          if (arr[front] > arr[back])
//          {
//              var temp = arr[front];
//              arr[front] = arr[back];
//              arr[back] = temp;
//          }
// 
//          // Increment and re-run swapping
//        
//          front += 1;
//          back += 1;
//      }
//      iteration_count += 1;
//  }
//  return arr;
//}
//
//console.log(combSort([54, 26, 93, 17, 77, 31, 44, 55, 20]))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//204.

//function gnomeSort(arr) 
//{
//    function moveBack(i) 
//  {
//        for( ; i > 0 && arr[i-1] > arr[i]; i--)
//        {
//            var t = arr[i];
//            arr[i] = arr[i-1];
//            arr[i-1] = t;
//        }
//    }
//    for (var i = 1; i < arr.length; i++) 
//    {
//        if (arr[i-1] > arr[i]) moveBack(i);
//    }
//    return arr;
//}
//
//console.log(gnomeSort([54, 26, 93, 17, 77, 31, 44, 55, 20]))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//205.

//function countingSort(arr, min, max)
//  {
//    var i, z = 0, count = [];
// 
//    for (i = min; i <= max; i++) {
//        count[i] = 0;
//    }
// 
//    for (i=0; i < arr.length; i++) {
//        count[arr[i]]++;
//    }
// 
//    for (i = min; i <= max; i++) {
//        while (count[i]-- > 0) {
//            arr[z++] = i;
//        }
//    }
// return arr;
//}
//var arra = [3, 0, 2, 5, 4, 1]; 
//console.log(arra.length);
//console.log("Original Array Elements"); 
//console.log(arra); 
//console.log("Sorted Array Elements"); 
//console.log(countingSort(arra, 0, 5));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//206.

//function flash_sort(arr) 
//  {
//    var max = 0, min = arr[0];
//    var n = arr.length;
//    var m = ~~(0.45 * n);
//    var l = new Array(m);
// 
//    for (var i = 1; i < n; ++i) {
//        if (arr[i] < min) {
//            min = arr[i];
//        }
//        if (arr[i] > arr[max]) {
//            max = i;
//        }
//    }
// 
//     if (min === arr[max]) {
//        return arr;
//    }
// 
//    var c1 = (m - 1) / (arr[max] - min);
// 
// 
//    for (var k = 0; k < m; k++) {
//        l[k] = 0;
//    }
//    for (var j = 0; j < n; ++j) {
//        k = ~~(c1 * (arr[j] - min));
//        ++l[k];
//    }
// 
//    for (var p = 1; p < m; ++p) {
//        l[p] = l[p] + l[p - 1];
//    }
// 
//    var hold = arr[max];
//    arr[max] = arr[0];
//    arr[0] = hold;
// 
//    //permutation
//    var move = 0, t, flash;
//    j = 0; 
//    k = m - 1;
//  
//    while (move < (n - 1)) {
//        while (j > (l[k] - 1)) {
//            ++j;
//            k = ~~(c1 * (arr[j] - min));
//        }
//        if (k < 0) break;
//        flash = arr[j];
//        while (j !== l[k]) {
//            k = ~~(c1 * (flash - min));
//            hold = arr[t = --l[k]];
//            arr[t] = flash;
//            flash = hold;
//            ++move;
//        }
//    }
// 
//    //insertion
//    for (j = 1; j < n; j++) {
//        hold = arr[j];
//         i = j - 1;
//        while (i >= 0 && arr[i] > hold) {
//            arr[i + 1] = arr[i--];
//        }
//        arr[i + 1] = hold;
//    }
//    return arr;
//}
//var arra = [3, 0, 2, 5, -1, 4, 1]; 
//console.log("Original Array Elements"); 
//console.log(arra); 
//console.log("Sorted Array Elements"); 
//console.log(flash_sort(arra, 0, 5));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//207.

//function pancake_sort(arr) {
//    for (var i = arr.length - 1; i >= 1; i--) {
//        // find the index of the largest element not yet sorted
//        var max_idx = 0;
//        var max = arr[0];
//        for (var j = 1; j <= i; j++) {
//            if (arr[j] > max) {
//                max = arr[j];
//                max_idx = j;
//            }
//        }
// 
//        if (max_idx == i) 
//            continue; // element already in place
// 
//        var new_slice;
// 
//        // flip arr max element to index 0
//        if (max_idx > 0) {
//            new_slice = arr.slice(0, max_idx+1).reverse();
//            for ( j = 0; j <= max_idx; j++) 
//                arr[j] = new_slice[j];
//        }
// 
//        // then flip the max element to its place
//        new_slice = arr.slice(0, i+1).reverse();
//        for ( j = 0; j <= i; j++) 
//            arr[j] = new_slice[j];
//    }
//    return arr;
//}
//
//var arra = [3, 0, 2, 5, -1, 4, 1]; 
//console.log("Original Array Elements"); 
//console.log(arra); 
//console.log("Sorted Array Elements"); 
//console.log(pancake_sort(arra, 0, 5));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//208.

//function Bogosort(arr){
//    var isSorted = function(arr){
//        for(var i = 1; i < arr.length; i++){
//            if (arr[i-1] > arr[i]) {
//                return false;
//            }
//        }
//        return true;
//    };
//
//    function shuffle(arr){
//        var count = arr.length, temp, index;
//
//        while(count > 0){
//            index = Math.floor(Math.random() * count);
//            count--;
//
//            temp = arr[count];
//            arr[count] = arr[index];
//            arr[index] = temp;
//        }
//
//        return arr;
//    }
//
//   function sort(arr){
//        var sorted = false;
//        while(!sorted){
//            arr = shuffle(arr);
//            sorted = isSorted(arr);
//        }
//        return arr;
//    }
//
//    return sort(arr);
//}
//
//
//var arra = [3, 0, 2, 5, -1, 4, 1]; 
//console.log("Original Array Elements"); 
//console.log(arra); 
//console.log("Sorted Array Elements"); 
//console.log(Bogosort(arra));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//209.

//const pad = (str, length, char = ' ') =>
// str.padStart((str.length + length) / 2, char).padEnd(length, char);
//console.log(pad('cat', 8));
//console.log(pad(String(42), 6, '0'))
//console.log(pad('foobar', 3))


//-------------------------------------------------------------------------------------------------------------------------------------------------

//210.

//function volume(l, w, h) {
//  return l * w * h;
//}
//
//const curried = _.curry(volume);
//
//volume(2, 3, 4); // 24
//curried(2)(3)(4); // 24


//-------------------------------------------------------------------------------------------------------------------------------------------------

//211.


//-------------------------------------------------------------------------------------------------------------------------------------------------

//212.

//  const get_URL_Parameters = url =>
//  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
//    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
//    {}
//  );
//console.log(get_URL_Parameters('http://url.com/page?name=Adam&surname=Smith')); 
//console.log(get_URL_Parameters('google.com'));
//console.log(get_URL_Parameters('https://www.w3resource.com'));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//213.

//const URL_Join = (...args) =>
//  args
//    .join('/')
//    .replace(/[\/]+/g, '/')
//    .replace(/^(.+):\//, '$1://')
//    .replace(/^file:/, 'file:/')
//    .replace(/\/(\?|&|#[^!])/g, '$1')
//    .replace(/\?/g, '&')
//    .replace('&', '?');
//
//console.log(URL_Join('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//214.

//const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
//const minMax = over(Math.min, Math.max);
//console.log(minMax(1, 2, 3, 4, 5)); 
//console.log(minMax(1, 2, 5, 4, 3)); 
//console.log(minMax(1, 2, 5, -4, 3));

//-------------------------------------------------------------------------------------------------------------------------------------------------

//215.

//const chainAsync = fns => {
//  let curr = 0;
//  const next = () => fns[curr++](next);
//  next();
//};
//chainAsync([
//  next => {
//    console.log('0 seconds');
//    setTimeout(next, 1000);
//  },
//  next => {
//    console.log('1 second');
//  }
//]);


//-------------------------------------------------------------------------------------------------------------------------------------------------

//216.

//const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
//const add5 = x => x + 5;
//const multiply = (x, y) => x * y;
//const multiplyAndAdd5 = compose(
//  add5,
//  multiply
//);
//console.log(multiplyAndAdd5(5, 2)); 


//-------------------------------------------------------------------------------------------------------------------------------------------------

//217.

//const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
//const average = converge((a, b) => a / b, [
//  arr => arr.reduce((a, v) => a + v, 0),
//  arr => arr.length
//]);
//console.log(average([ 6, 7]));
//console.log(average([1, 2, 3, 4, 5, 6, 7]));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//218.

//const countBy = (arr, fn) =>
//  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
//    acc[val] = (acc[val] || 0) + 1;
//    return acc;
//  }, {});
//console.log(countBy([6, 10, 100, 10], Math.sqrt));
//console.log(countBy([6.1, 4.2, 6.3], Math.floor));
//console.log(countBy(['one', 'two', 'three'], 'length'));


//-------------------------------------------------------------------------------------------------------------------------------------------------

//219.
 
//const deepClone = obj => {
//  let clone = Object.assign({}, obj);
//  Object.keys(clone).forEach(
//    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
//  );
//  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
//};
//const a = { foo: 'bar', obj: { a: 1, b: 2 } };
//const b = deepClone(a); // a !== b, a.obj !== b.obj
//console.log(b)



//-------------------------------------------------------------------------------------------------------------------------------------------------

//220.

