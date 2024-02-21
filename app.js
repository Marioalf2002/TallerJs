/**
 * Crear 3 Arrow Function
 * 1. Recibe 0 parámetros y retorna un string
 * 2. Recibe 1 parametro y retorna un string
 * 3. Recibe más de 2 parámetros y retorna una operación matemática
 * Crear variables
 * 3 variables Const 
 * 5 variables Let
 * Y cree operaciones variadas, usando métodos propios de JavaScript
*/

const arrowFunction1 = () => 'Hola Mundo';
const arrowFunction2 = (param) => `Hola ${param}`;
const arrowFunction3 = (param1, param2, param3) => param1 + param2 * param3;

const const1 = 12;
const const2 = 23;
const const3 = 34;

let let1 = 4;
let let2 = 5;
let let3 = 6;
let let4 = 7;
let let5 = 8;

let1 += 1;
let2 -= 1;
let3 *= 1;
let4 /= 1;
let5 %= 1;

console.log(arrowFunction1());
console.log(arrowFunction2('Mundo'));
console.log(arrowFunction3(const1, const2, const3));

console.log(let1);
console.log(let2);
console.log(let3);
console.log(let4);
console.log(let5);

const string = 'Hola Mundo';
const number = 123;
const array = [1, 2, 3, 4, 5];
const object = {
    name: 'Adrian',
    age: 23
};

console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.charAt(0));
console.log(string.indexOf('Mundo'));
console.log(string.split(' '));
console.log(string.replace('Mundo', 'Adrian'));
console.log(string.includes('Mundo'));
console.log(string.concat(' ', 'Adrian'));
console.log(string.slice(0, 4));
console.log(string.substring(0, 4));
console.log(string.trim());

console.log(number.toString());
console.log(number.toFixed(2));
console.log(number.toPrecision(2));
console.log(number.valueOf());

console.log(array.length);
console.log(array.join(' '));
console.log(array.pop());
console.log(array.push(6));
console.log(array.shift());
console.log(array.unshift(0));
console.log(array.reverse());
console.log(array.sort());
console.log(array.splice(2, 1));
console.log(array.concat([6, 7, 8, 9]));

console.log(object.name);
console.log(object.age);
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));
console.log(Object.assign(object, {
    lastName: 'Gonzalez'
}));
console.log(Object.freeze(object));
console.log(Object.seal(object));
console.log(Object.isFrozen(object));
console.log(Object.isSealed(object));
console.log(Object.isExtensible(object));
console.log(Object.preventExtensions(object));
console.log(Object.isExtensible(object));
console.log(Object.getOwnPropertyDescriptor(object, 'name'));
console.log(Object.getOwnPropertyNames(object));
console.log(Object.getPrototypeOf(object));
console.log(Object.setPrototypeOf(object, {
    lastName: 'Gonzalez'
}));
console.log(Object.is(object, object));
console.log(Object.create(object));
console.log(Object.defineProperties(object, {
    lastName: {
        value: 'Gonzalez'
    }
}));
console.log(Object.defineProperty(object, 'lastName', {
    value: 'Gonzalez'
}));
console.log(Object.entries(object));
console.log(Object.freeze(object));
console.log(Object.fromEntries(Object.entries(object)));
console.log(Object.getOwnPropertyDescriptor(object, 'name'));
console.log(Object.getOwnPropertyDescriptors(object));
console.log(Object.getOwnPropertyNames(object));
console.log(Object.getOwnPropertySymbols(object));
console.log(Object.getPrototypeOf(object));
console.log(Object.isExtensible(object));
console.log(Object.isFrozen(object));
console.log(Object.isSealed(object));
console.log(Object.keys(object));
console.log(Object.preventExtensions(object));
console.log(Object.seal(object));
console.log(Object.setPrototypeOf(object, {
    lastName: 'Gonzalez'
}));
console.log(Object.values(object));
console.log(Object.prototype);
console.log(Object.prototype.__defineGetter__('name', () => 'Adrian'));
console.log(Object.prototype.__defineSetter__('name', (value) => value));
console.log(Object.prototype.__lookupGetter__('name'));
console.log(Object.prototype.__lookupSetter__('name'));
console.log(Object.prototype.hasOwnProperty('name'));
console.log(Object.prototype.isPrototypeOf(object));
console.log(Object.prototype.propertyIsEnumerable('name'));
console.log(Object.prototype.toLocaleString());
console.log(Object.prototype.toString());
console.log(Object.prototype.valueOf());
console.log(Object.prototype.constructor);
console.log(Object.prototype.__proto__);