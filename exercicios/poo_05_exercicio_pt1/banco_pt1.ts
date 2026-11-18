export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(
        id: number,
        nome: string,
        cpf: string,
        dataNascimento: Date
    ) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

export class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente?: Cliente;
    dataDeAbertura: Date;

    constructor(
        id: number,
        numero: string,
        saldo: number = 0,
        dataDeAbertura: Date = new Date()
    ) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.dataDeAbertura = dataDeAbertura;
    }

    sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (valor <= 0 || contaDestino === this) {
            return false;
        }

        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}

export class Banco {
    contas: Conta[] = [];
    clientes: Cliente[] = [];

    inserirConta(conta: Conta): void {
        const contaDuplicada = this.contas.some(
            contaExistente =>
                contaExistente.id === conta.id ||
                contaExistente.numero === conta.numero
        );

        if (!contaDuplicada) {
            this.contas.push(conta);
        }
    }

    consultar(numero: string): Conta | undefined {
        return this.contas.find(conta => conta.numero === numero);
    }

    alterar(contaAtualizada: Conta): void {
        const indice = this.contas.findIndex(
            conta => conta.numero === contaAtualizada.numero
        );

        if (indice !== -1) {
            this.contas[indice] = contaAtualizada;
        }
    }

    excluir(numero: string): void {
        const indice = this.contas.findIndex(conta => conta.numero === numero);
        if (indice === -1) {
            return;
        }

        const conta = this.contas[indice];
        if (conta.cliente) {
            conta.cliente.contas = conta.cliente.contas.filter(
                contaCliente => contaCliente !== conta
            );
            conta.cliente = undefined;
        }
        this.contas.splice(indice, 1);
    }

    sacar(numero: string, valor: number): void {
        const conta = this.consultar(numero);
        if (conta) {
            conta.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        const conta = this.consultar(numero);
        if (conta) {
            conta.depositar(valor);
        }
    }

    transferir(
        numeroContaCredito: string,
        numeroContaDebito: string,
        valor: number
    ): void {
        const contaCredito = this.consultar(numeroContaCredito);
        const contaDebito = this.consultar(numeroContaDebito);

        if (contaCredito && contaDebito) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    inserirCliente(cliente: Cliente): void {
        const clienteDuplicado = this.clientes.some(
            clienteExistente =>
                clienteExistente.id === cliente.id ||
                clienteExistente.cpf === cliente.cpf
        );

        if (!clienteDuplicado) {
            this.clientes.push(cliente);
        }
    }

    consultarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultar(numeroConta);

        if (!cliente || !conta || conta.cliente) {
            return;
        }

        const contaJaAssociada = cliente.contas.some(
            contaCliente => contaCliente === conta
        );

        if (!contaJaAssociada) {
            conta.cliente = cliente;
            cliente.contas.push(conta);
        }
    }

    listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarCliente(cpf);
        return cliente ? cliente.contas : [];
    }

    totalizarSaldoCliente(cpf: string): number {
        return this.listarContasCliente(cpf).reduce(
            (total, conta) => total + conta.saldo,
            0
        );
    }
}