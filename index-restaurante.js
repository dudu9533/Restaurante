/* 
Pensar e fazer um projeto  de um sistema 
que a pessoa pede uma comida e 
aparece para a cozinha o seu  pedido
*/

/*
Ideias:

- Restaurante colocar para o cliente o cardápio no console
- Pessoa colocar seu nome
- Pessoa colocar o número da mesa
- Pessoa fazer seu pedido
- Pessoa pede em sistema de nome do prato, que para a cozinha aparece 
tudo que há no prato e observações
*/ 

import { CardapioRestaurante } from "./Cardápio/Cardápio-restaurante.js";
import { ClienteRestaurante } from "./Clientes/Cliente-restaurante.js";



const cardapioDoRestaurante = new CardapioRestaurante
const pedidoEduardo =  new ClienteRestaurante("Eduardo", 102, 'O melhor');

console.log(cardapioDoRestaurante);
console.log(pedidoEduardo);