const myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});


for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}

// // Iterate over keys
// for (const key of myMap.keys()) {
//     console.log(key);
// }

// // Iterate over values
// for (const value of myMap.values()) {
//     console.log(value);
// }

// // Iterate over key-value pairs
// for (const [key, value] of myMap.entries()) {
//     console.log(`${key} = ${value}`);
// }

