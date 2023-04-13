const prices: number[] = [ 1, 3, 2, 2, 2 ];
const prices2: (number | string)[] = [ 1, 3, 2, 2, 2, '3213' ];

let user: [ string, number ] = [ 'nicobytes', 15 ];

const [ userName, age ] = user;
console.log(userName);
console.log(age);
