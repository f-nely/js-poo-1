import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 64062389070;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 54717228090;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo._saldo);
console.log(contaCorrenteRicardo);

console.log(cliente1);
console.log(cliente2);