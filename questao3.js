let alternativa1 = [1, 3, 5, 7]; // n + 2
let alternativa2 = [2, 4, 8, 16, 32, 64]; // n * 2
let alternativa3 = [0, 1, 4, 9, 16, 25, 36]; // é o quadrado de cada número na ordem crescente (0, 1, 2, 3, 4, 5, 6)
let alternativa4 = [4, 16, 36, 64]; // é o quadrado dos números pares na ordem crescente (2, 4, 6, 8)
let alternativa5 = [1, 1, 2, 3, 5, 8]; // é a sequência de Fibonacci
// let alternativa6 = [2, 10, 12, 16, 17, 18, 19];
let alternativa6 = [
  "dois",
  "dez",
  "doze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
];
// número que por extenso é escrito com a letra "d" (dois, dez, doze, dezesseis, dezessete, dezoito, dezenove)

// Alternativa A
function proximoNumeroAlternativa1(array) {
  let ultimoNumero = array[array.length - 1];
  array.push(ultimoNumero + 2);
  return `O próximo número é ${array[array.length - 1]}`;
}

console.log(proximoNumeroAlternativa1(alternativa1));

// Alternativa B
function proximoNumeroAlternativa2(array) {
  let ultimoNumero = array[array.length - 1];
  array.push(ultimoNumero * 2);
  return `O próximo número é ${array[array.length - 1]}`;
}

console.log(proximoNumeroAlternativa2(alternativa2));

// Alternativa C
function proximoNumeroAlternativa3(array) {
  let ultimoNumero = array[array.length - 1];
  let raiz = Math.sqrt(ultimoNumero);
  let proximoNumero = Math.pow(raiz + 1, 2);
  array.push(proximoNumero);
  return `O próximo número é ${array[array.length - 1]}`;
}

console.log(proximoNumeroAlternativa3(alternativa3));

// Alternativa D
function proximoNumeroAlternativa4(array) {
  let ultimoNumero = array[array.length - 1];
  let raiz = Math.sqrt(ultimoNumero);
  let proximoNumero = Math.pow(raiz + 2, 2);
  array.push(proximoNumero);
  return `O próximo número é ${array[array.length - 1]}`;
}

console.log(proximoNumeroAlternativa4(alternativa4));

// Alternativa E
function proximoNumeroAlternativa5(array) {
  let ultimoNumero = array[array.length - 1];
  let penultimoNumero = array[array.length - 2];
  array.push(ultimoNumero + penultimoNumero);
  return `O próximo número é ${array[array.length - 1]}`;
}

console.log(proximoNumeroAlternativa5(alternativa5));

// Alternativa F
function proximoNumeroAlternativa6(array) {
  array.forEach((element) => {
    if (!element.split("")[0] == "d") {
      return `Algum número não começa com a letra "d", portanto não se encaixa na sequência.`;
    }
  });
  array.push("duzentos");
  return `O próximo número é ${array[array.length - 1]}`;
}

console.log(proximoNumeroAlternativa6(alternativa6));
