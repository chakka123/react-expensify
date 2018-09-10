// const person = {
//     age:26,
//     location: {
//         city: 'Sydney',
//         temp: 16
//     }
// };

// console.log(`${person.name} is ${person.age}`);

// const {age, name:firstName = 'anonymous'} = person

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}`);


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log( publisherName );


// const address = ['129 Juniper Street','Sydney','NSW','2060'];

// const[, city = 'Winchester', state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['coffee','2','3','4'];

const [drink,small,medium,large] = item;

console.log(`A medium ${drink} costs ${medium} dollars.`)