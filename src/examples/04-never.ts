const withoutEnd = () => {
  while (true) {
    console.log('nunca pares de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  }

  return fail('no hizo match')
}

console.log(example('Hola'));
console.log(example([ 1, 12, 32, 3 ]));
console.log(example(3232));
console.log(example('Despues del Fail'));

