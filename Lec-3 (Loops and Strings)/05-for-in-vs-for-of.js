console.log("\n For-in Vs For-of \n")
const peoples = [
    {
        name: "Mike Smith",
        family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith",
        },
        age: 35,
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones",
        },
        age: 25,
    },
    {
        name: "Kailyn",
        family: {
            mother: "Chasity",
            father: "Dortha",
            sister: "Sarai",
        },
        age: 32,
    },
    {
        name: "Trace Bins",
        family: {
            mother: "Claudia Dibbert IV",
            father: "Vesta Blanda",
            brother: "Rowena Homenick",
        },
        age: 29,
    },
];

// I have a peoples array, I want to iterate over its indices where I have Objects which have keys of different types. 
// If any of the keys inside those objects is itslef another object, I want to iterate over the keys of that object and print their values on console

/*

peoples
    index-0
        |
        |--- name
        |--- family
        |       |--- mother
        |       |--- father
        |       |--- brother
        |--- age        

At index 0 of peole we have an object which has 3 keys from which family itself has an object as value. 
So I want to print out those keys inside family and their values -> mother father brother

 */

// To Iterate over indices of peoples array -> for-of loop
for (const obj of peoples) {
    // To Iterate over keys in object -> for-in loop
    for (const key in obj) {
        // If value of that key is an instance of Object then iterate over keys of that key
        if (obj[key] instanceof Object) {           // obj[key] -> value stored in that key
            for (const innerKey in obj[key]) {
                console.log(innerKey, " : ", obj[key][innerKey])
            }
            console.log("______________")
        }
    }
}





