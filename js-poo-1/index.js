class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 64062389070;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 54717228090;

console.log(cliente1);
console.log(cliente2);