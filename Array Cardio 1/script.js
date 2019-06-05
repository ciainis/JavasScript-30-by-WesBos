import { inventors } from './inventors.js';
import { people, peopleTwo, comments } from './people.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const class500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(class500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const firsNlast = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(firsNlast);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const oldToYoung = inventors.sort((a, b) => a.year - b.year);
console.table(oldToYoung);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((acc, curr) => acc + (curr.passed - curr.year), 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const longevity = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
console.table(longevity);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// let category = document.querySelector('.mw-category');
// let links = [...category.querySelectorAll('a')];
// console.log(links.filter((link) => link.text.includes('de')));

// 7. sort Exercise
// Sort the people alphabetically by last name

const byLastName = people.sort((a, b) => {
    if (a < b) {
        return -1;
    } 
    if (a > b) {
        return 1;
    } 
    return 0;
});

console.log(byLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const reduced = data.reduce((acc, curr) => {
    if (!acc[curr]) {
        acc[curr] = 0;
    }
    acc[curr]++;
    
    return acc;
}, {});

console.log(reduced);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const someOlderThanNineteen = peopleTwo.some(person => (new Date().getFullYear() - person.year) >= 19);
console.log({someOlderThanNineteen});

// Array.prototype.every() // is everyone 19 or older?

const allOlderThanNineteen = peopleTwo.every(person => (new Date().getFullYear() - person.year) >= 19);
console.log({allOlderThanNineteen});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
// comments.splice(index, 1);
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
console.log(newComments);
