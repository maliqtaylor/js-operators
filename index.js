/* Operators

Operators & Variables -> Expressions -> Algorithms
( we use operators and values to create expressions,
and then we use expressions to create algorithms )

Operators */

/*Types of Operators

a. Arithmetic
b. Assignment
c. Comparison
d. Logical
e. Bitwise

Types of Operators */

//------------------------------------------------------------------------------------------------------------------------

// Arithmetic ( + , - , * , / , % , ** , ++ , -- )

let x = 10;
let y = 5;

// console.log(x + y);// addition
// console.log(x - y);// subtraction
// console.log(x * y);// multiplication
// console.log(x / y);// division
// console.log(x % y);// modulo (remainder after division)
// console.log(x ** y);// exponentiation (x to the power of y)

// Increment (++)

console.log(++x);
/* since increment(++) comes 
   before x, the value of x 
   will be incremented first 
   and then logged onto the 
   console               */

console.log(`y before: ${y++}`);// value hasnt incremented yet
/* since increment(++) comes
   after y, the value of y
   will be logged onto the 
   console first and then
   incremented               */
console.log(`y after ${y}`);// value increments 

// Decrement (--)

console.log(--x);
/* since decrement(--) comes 
   before x, the value of x 
   will be decremented first 
   and then logged onto the 
   console               */

console.log(`y before: ${y--}`);// value hasnt decremented yet
/* since decrement(++) comes
   after y, the value of y
   will be logged onto the 
   console first and then
   decremented               */
console.log(`y after ${y}`);// value decrements 

//------------------------------------------------------------------------------------------------------------------------

// Assignment ( = , += , *= , etc..  )

// used to assign values 
// can be used in conjuction with arithmetic operators ( ex. /= )

//------------------------------------------------------------------------------------------------------------------------

// Comparison ( < , > , ===, !== , <= , => )

let z = 1;

// Relational
console.log(z > 0);
console.log(z >= 1);
console.log(z < 0);
console.log(z <= 1);

// Equality (Strict)
console.log(z === 1);
console.log(z !== 1);
console.log('1' === 1);// false because strict (same value, different type)


// Equality (Loose)
console.log('1' == 1);

//------------------------------------------------------------------------------------------------------------------------

// Ternary

/* If a customer has more than
   100 points they are a 'gold'
   customer, otherwise they are 
   a silver customer.  */

let points = 105;
let type = points >= 100 ? 'gold' : 'silver';

//------------------------------------------------------------------------------------------------------------------------

// Logical ( && , || , ! )

// AND ( && ) 
console.log(true && true);// logs true because both operands are true
console.log(false && true);// logs false because one operand is false

// OR ( || )

console.log(true || true);// logs true because both operands are true
console.log(false || true);// logs true because one operand is true

// NOT ( ! )
let valid = true
let rejection = !valid
console.log('rejected', rejection);

//------------------------------------------------------------------------------------------------------------------------

/* Falsy and Truthy 

a. undefined
b. null
c. 0
d. false
e. ''
f. NaN

(any value that is not falsy -> truthy)

Falsy and Truthy */

console.log(false || 'maliq');// will log 'maliq' (truthy)
console.log(false || 1 || 2);// will log 1 (short circuting)

//------------------------------------------------------------------------------------------------------------------------











