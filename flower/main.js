let fs = require("fs")
let result = fs.readFileSync("./flower.txt").toString()

// Count the number of rows
var lines = result.split('\n')
console.log(lines.length)


//List the flower name that start with letter 'S'
let count = 0;
for(let i = 0; i<lines.length; i++)
{
    if(lines[i].charAt(0) == "S") {
        console.log(lines[i])
        count++
    }
}


// Count the number of flower that not start with letter 'S'
console.log(count)


//List the flower start with first letter of your name
for(let i = 0; i<lines.length; i++)
{
    if(lines[i].charAt(0) == "U") {
        console.log(lines[i])
    }
}


//List all the flower the name length is 5
for(let i = 0; i<lines.length; i++)
{
    if(lines[i].length == 5){
    console.log(lines[i])
    }
}