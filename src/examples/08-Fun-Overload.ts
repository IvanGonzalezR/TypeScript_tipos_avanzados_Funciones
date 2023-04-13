// Ivan => [I,v,a,n] => string => string[]
// [I,v,a,n] => Ivan => string[] => string

// Solo funciona en funciones declaradas como fun y no en arrow functions
// se declaran los posibles inputs y outputs uno por uno y despues la solucion completa
function parseString(input: string): string[];
function parseString(input: string[]): string;

function parseString(input: string[] | string): (string | string[]) {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}
// {
//   return input.split(''); // retorna string[]
// }
// {
//   return input.join('');
// }

const rta1 = parseString('Ivan');
// rta1.push()
const rta2 = parseString([ 'I', 'v', 'a', 'n' ]);
// rta2.charAt()

console.log(
  'Como array:',
  rta1
);
console.log(
  'Como string:',
  rta2
);

export { parseString }