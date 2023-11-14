
let smallObjects = [
    { name: 'Pen', color: 'Blue', size: 'Small' },
    { name: 'Keychain', color: 'Silver', size: 'Tiny' },
    { name: 'Button', color: 'Red', size: 'Miniature' },
    { name: 'Coin', color: 'Gold', size: 'Small' },
    { name: 'Marble', color: 'Green', size: 'Tiny' }
];


function filterSmallObjects(objects, size) {
    return objects.filter(object => object.size.toLowerCase() === size.toLowerCase());
}


let smallSize = 'Tiny';
let tinyObjects = filterSmallObjects(smallObjects, smallSize);


console.log(`Small objects with size ${smallSize}:`);
tinyObjects.forEach(object => {
    console.log(`${object.name} - Color: ${object.color}`);
});
