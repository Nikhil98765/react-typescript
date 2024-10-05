
// primitive - number, string and boolean
// Reference - array, object
// Function types, parameters

type Person = {
    name: string;
    age: number;
}

let age: number;
age = 23;

let userName: string;
userName = 'Nikhil';

let isInstructor: boolean;
isInstructor = false;

// arrays and objects

let a : string[];
a = ['12', '16'];

let person: Person;

person = {
    name: 'Maz',
    age: 23
};

// person = {
//     isEmployee: true,
// }

let people: Person[];

// Type inference - It's a good practice
let course: string | number = 'React bootcamp';
course = 12;

// Function types

function add(a:number, b: number) {
    return a+b;
}

function logMessage(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    return [...array, value];
}

const updatedArray = insertAtBeginning([1, 2, 3], 4);
// updatedArray[0].split('');

const updatedStringArr = insertAtBeginning(['1', '3', '4'], 'asd');
