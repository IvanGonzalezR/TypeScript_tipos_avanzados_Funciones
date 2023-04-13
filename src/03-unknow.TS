let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 'asdas';

let isNew: boolean = anyVar;
anyVar.doanything();



let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 'asdas';
unknownVar = 1;
unknownVar = {};

// hay que verificar el tipo de la variable al menos
// unknownVar.doSomethinsg();
if (typeof unknownVar === 'string') {
  unknownVar.toLowerCase();
}

//aqui no deja, como en el Any
// let isNew2: boolean = unknownVar;

const parse = (str: string): unknown => {
  return JSON.parse(str)
}
