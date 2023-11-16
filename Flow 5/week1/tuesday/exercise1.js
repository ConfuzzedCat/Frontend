let names = ["Lars", "Peter", "Jan", "Bo"];

function myFilter(array, callback)
{
    let result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(callback(element))
            result.push(element)
    }
    return result;
}

let testArray = myFilter(names, (name) => name.length > 2)

function myMap(array, callback)
{
    let result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result.push(callback(element))
    }
    return result
}

// 1.2

Array.prototype.myFilter = 
    function myFilter(callback) {
        let result = []
        for (let i = 0; i < this.length; i++) {
            const element = this[i];
            if(callback(element))
                result.push(element)
        }
        return result;
    }

let test = names.myFilter((name) => name.length > 2)
console.log(test)

// 1.3