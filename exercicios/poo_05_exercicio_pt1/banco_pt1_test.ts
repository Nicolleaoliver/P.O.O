import { Banco, Cliente, Conta } from "./banco_pt1.ts";

function verificar(condicao: boolean, mensagem: string): void {
    if (!condicao) {
        throw new Error(mensagem);
    }
}

const banco = new Banco();

const cliente1 = new Cliente(
    1,
    "Ana Silva",
    "11111111111",
    new Date("2000-01-10")
);
const cliente2 = new Cliente(
    2,
    "Bruno Souza",
    "22222222222",
    new Date("1998-05-20")
);

const conta1 = new Conta(1, "1001", 500);
const conta2 = new Conta(2, "1002", 300);
const conta3 = new Conta(3, "1003", 200);

banco.inserirCliente(cliente1);
banco.inserirCliente(cliente2);
verificar(banco.clientes.length === 2, "Falha ao inserir clientes");

banco.inserirCliente(
    new Cliente(1, "Duplicado por ID", "33333333333", new Date())
);
banco.inserirCliente(
    new Cliente(3, "Duplicado por CPF", "11111111111", new Date())
);
verificar(
    banco.clientes.length === 2,
    "Cliente duplicado por ID ou CPF foi inserido"
);

verificar(
    banco.consultarCliente("11111111111") === cliente1,
    "Falha ao consultar cliente pelo CPF"
);
verificar(
    banco.consultarCliente("99999999999") === undefined,
    "Consulta de CPF inexistente deveria retornar undefined"
);

banco.inserirConta(conta1);
banco.inserirConta(conta2);
banco.inserirConta(conta3);
verificar(banco.contas.length === 3, "Falha ao inserir contas");

banco.inserirConta(new Conta(1, "9999", 50));
banco.inserirConta(new Conta(4, "1001", 50));
verificar(
    banco.contas.length === 3,
    "Conta duplicada por ID ou número foi inserida"
);

verificar(
    banco.consultar("1001") === conta1,
    "Falha ao consultar conta pelo número"
);

banco.associarContaCliente("1001", "11111111111");
banco.associarContaCliente("1002", "11111111111");
banco.associarContaCliente("1001", "22222222222");
banco.associarContaCliente("1001", "11111111111");

verificar(
    conta1.cliente === cliente1,
    "Conta não foi associada ao cliente correto"
);
verificar(
    cliente1.contas.length === 2,
    "Falha na associação ou duplicação de conta no cliente"
);
verificar(
    conta1.cliente !== cliente2,
    "Conta foi associada a mais de um cliente"
);

verificar(
    banco.listarContasCliente("11111111111").length === 2,
    "Falha ao listar contas do cliente"
);
verificar(
    banco.listarContasCliente("99999999999").length === 0,
    "Lista de CPF inexistente deveria ser vazia"
);

banco.depositar("1001", 100);
verificar(conta1.saldo === 600, "Falha ao depositar");
banco.sacar("1001", 200);
verificar(conta1.saldo === 400, "Falha ao sacar");

banco.transferir("1003", "1001", 100);
verificar(conta1.saldo === 300, "Falha no débito da transferência");
verificar(conta3.saldo === 300, "Falha no crédito da transferência");

verificar(
    banco.totalizarSaldoCliente("11111111111") === 600,
    "Falha ao totalizar saldo do cliente"
);

const contaAlterada = new Conta(1, "1001", 999);
contaAlterada.cliente = cliente1;
banco.alterar(contaAlterada);
verificar(
    banco.consultar("1001") === contaAlterada,
    "Falha ao alterar conta"
);
cliente1.contas = [contaAlterada];

banco.excluir("1001");
verificar(banco.consultar("1001") === undefined, "Falha ao excluir conta");
verificar(
    !cliente1.contas.includes(contaAlterada),
    "Conta excluída permaneceu associada ao cliente"
);

console.log("Todos os testes da parte 1 passaram.");
