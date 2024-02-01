# Desafio de Lógica de Programação - Simulador de Heróis

## Objetivo:
O objetivo deste desafio é criar uma classe em JavaScript que simula heróis com diferentes tipos (mago, guerreiro, monge e ninja) e implementa métodos para atacar e defender. A classe Hero possui um construtor que recebe informações sobre o nome, idade e tipo do herói, além de métodos atacar e defender que retornam mensagens específicas com base no tipo do herói.

## Estrutura do Código:
A classe Hero possui as seguintes características:

## 1. Construtor:
constructor(nome, idade, tipo): Cria uma instância do herói com informações como nome, idade e tipo.

## 2. Métodos:
atacar(): Retorna uma mensagem indicando o ataque do herói com base no seu tipo (mago, guerreiro, monge, ninja).
defender(): Retorna uma mensagem indicando a defesa do herói com base no seu tipo.

##Exemplo de Uso:
javascript

```
//Cria instâncias.
const h1 = new Hero('Darvin', 42, 'mago');
const h2 = new Hero('Tesla', 42, 'guerreiro');
const h3 = new Hero('Turin', 42, 'monge');
const h4 = new Hero('Edson', 42, 'ninja');

// Testa os métodos atacar e defender e exibe no console as mensagens resultantes.
console.log(h1.atacar());
console.log(h2.atacar());
console.log(h3.atacar());
console.log(h4.atacar());

console.log(h1.defender());
console.log(h2.defender());
console.log(h3.defender());
console.log(h4.defender());
```
Saída Esperada:
Ao executar o exemplo acima, a classe Hero deverá exibir mensagens indicando os ataques e defesas dos heróis, conforme seus tipos.

Este desafio permite a prática de conceitos de programação orientada a objetos (POO), condicionais e manipulação de arrays.

Sinta-se à vontade para explorar e adaptar este código conforme necessário para cumprir os requisitos do desafio de lógica de programação proposto.
