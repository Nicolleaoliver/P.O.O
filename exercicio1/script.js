"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World!");
// 2)
//  let idade: number = "2";
// 3)
// let nome = "Nicolle";
// console.log(typeof(nome));
// 4)
// a)
let a = 10;
let b = "5";
console.log(a + b); // 105 - concatena
// b
// let x = true;
// let y = 2;
// console.log(x + y); // erro: não é possível juntar valor booelano e inteiro
// c e 5
// console.log(0 == false); // number e boolean não se sobrepõem / ambiente typescript
// console.log("" == false); // string e boolean não se sobrepõem / ambiente typescript
// console.log(null == undefined); // true / ambiente typescript e javascript
// 6
// let nome: string = "Ely";
// let salario: number = 2000;
// let linguagem: string = "TypeScript";
// console.log(`${nome}\nMy salary is ${salario}\nand\nmy preeffered language is ${linguagem}`
// );
// 7
// a
let mensagem = "TypeScript É MUITO LEGAL!";
console.log(mensagem.toUpperCase());
console.log(mensagem.length);
// b
let pi = 3.1415;
console.log(pi.toFixed(2));
// 8
// Classe Retangulo, metodo para calcular perimetro
// class Retangulo {
//     l1: number = 0;
//     l2: number = 0;
//     calcularArea(): number{
//         return this.l1 * this.l2
//     }
//     calcularPerimetro(): number {
//         return 2 * (this.l1 + this.l2);
//     }
// }
// let retangulo: Retangulo;
// retangulo = new Retangulo();
// retangulo.l1 = 10;
// retangulo.l2 = 20;
// console.log("Área: ", retangulo.calcularArea())
// console.log("Perimetro: ", retangulo.calcularPerimetro())
// 9
class Circulo {
    raio = 0;
    calcularAreaCirculo() {
        return 3.14 * (this.raio ** 2);
    }
    calcularCircunferencia() {
        return 2 * 3.14 * this.raio;
    }
}
let circulo;
circulo = new Circulo;
circulo.raio = 15;
console.log("Área: ", circulo.calcularAreaCirculo());
console.log("Circunferencia: ", circulo.calcularCircunferencia());
//10
class SituacaoFinanceira {
    valorCreditos = 0;
    valorDebitos = 0;
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacaoFinanceira;
situacaoFinanceira = new SituacaoFinanceira;
situacaoFinanceira.valorCreditos = 1000;
situacaoFinanceira.valorDebitos = 200;
console.log("Saldo: ", situacaoFinanceira.calcularSaldo());
// 11
class Pessoa {
    nome = "";
    idade = 0;
    apresentar() {
        return "Meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
    }
}
let pessoa;
pessoa = new Pessoa;
pessoa.nome = "Ely";
pessoa.idade = 46;
console.log(pessoa.apresentar());
// 12
class Produto {
    nome = "";
    preco = 0;
    desconto = 0;
    // b
    aplicarDesconto() {
        return (this.preco - ((this.preco * this.desconto) / 100)).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL', });
    }
    // c e d
    emitirOrcamento() {
        return "Produto: " + this.nome + ", Preço: " + this.preco + "\nDesconto: " + this.desconto + "% " + "Novo preço: " + this.aplicarDesconto();
    }
}
let produto;
produto = new Produto;
produto.nome = "Calça";
produto.preco = 160;
produto.desconto = 20;
console.log(produto.emitirOrcamento());
// 13
class Numero {
    valor = 0;
    ehPar() {
        return this.valor % 2 == 0;
    }
    ehImpar() {
        return this.valor % 2 != 0;
    }
}
let numero1;
numero1 = new Numero;
numero1.valor = 3;
let numero2;
numero2 = new Numero;
numero2.valor = 2;
let numero3;
numero3 = new Numero;
numero3.valor = 10;
console.log(numero1.ehPar(), numero1.ehImpar(), numero2.ehPar(), numero2.ehImpar(), numero3.ehPar(), numero3.ehImpar());
//# sourceMappingURL=script.js.map