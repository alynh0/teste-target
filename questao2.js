let numero = 21; //Digite um número inteiro positivo p/ verificar se ele está na sequencia de Fibonacci

function fibonacci(n) {
  let lista = [];
  let penultimo = 0;
  let ultimo = 1;
  lista.push(penultimo);
  lista.push(ultimo);
  while (ultimo <= n) {
    let proximo = penultimo + ultimo;
    lista.push(proximo);
    penultimo = ultimo;
    ultimo = proximo;
  }
  return lista;
}

function verificarNumeroNaLista(lista, numero) {
  if (lista.includes(numero)) {
    return `O número ${numero} está na lista`;
  } else {
    return `O número ${numero} não está na lista`;
  }
}

console.log(fibonacci(numero));
console.log(verificarNumeroNaLista(fibonacci(numero), numero)); // true
