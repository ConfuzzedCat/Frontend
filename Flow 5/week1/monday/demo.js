console.log("Dav dav")

let a = 1
let b = 123
const C = a + b
var test = "test"
console.log(test)

let names = ["Ole", "Bent", "Ida", 1, 2, 3]

function printArray(array)
{
    array.forEach(element => console.log(element))
}

printArray(names)
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let newnumebers = numbers.map(n => n*5)

let filteredNumbers = newnumebers.filter(n => n > 14)
console.log(filteredNumbers)

let li = names.map(item => `<li>${item}</li>`)

let ul = "<ul>\n\t" + li.join("\n\t") + "\n</ul>"
console.log(ul) 


