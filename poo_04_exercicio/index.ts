class Hotel {
    quantReservas: number;

    constructor(quantReservas:number) {
        this.quantReservas = quantReservas
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
console.log(hotel.quantReservas);


class Radio {
    volume: number;

    constructor(volume: number) {
        this.volume = volume;
    }
}

let r: Radio = new Radio();
r.volume = 10


let c1: Conta = new Conta("1",100); 
let c2: Conta = new Conta("2",100); 
let c3: Conta; 
c1 = c2; 
c3 = c1; 
c1.sacar(10); 
c1.transferir(c2,50); 
console.log(c1.consultarSaldo()); 
console.log(c2.consultarSaldo()); 
console.log(c3.consultarSaldo()); 



class Triangulo {
  a: number;
  b: number;
  c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  ehTriangulo(): boolean {
    return (
      Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c &&
      Math.abs(this.a - this.c) < this.b && this.b < this.a + this.c &&
      Math.abs(this.a - this.b) < this.c && this.c < this.a + this.b
    );
  }

  ehIsosceles(): boolean {
    if (!this.ehTriangulo()) return false;
    return (this.a === this.b || this.a === this.c || this.b === this.c) && !this.ehEquilatero();
  }

  ehEquilatero(): boolean {
    if (!this.ehTriangulo()) return false;
    return this.a === this.b && this.b === this.c;
  }

  ehEscaleno(): boolean {
    if (!this.ehTriangulo()) return false;
    return this.a !== this.b && this.b !== this.c && this.a !== this.c;
  }
}

const t1 = new Triangulo(3, 3, 3);
console.log("t1 é Triângulo?", t1.ehTriangulo());
console.log("t1 é Equilátero?", t1.ehEquilatero()); 

const t2 = new Triangulo(3, 4, 5);
console.log("t2 é Escaleno?", t2.ehEscaleno());

const t3 = new Triangulo(1, 2, 10);
console.log("t3 é Triângulo?", t3.ehTriangulo());



class Equipamento {
  ligado: boolean;

  constructor(ligado: boolean = false) {
    this.ligado = ligado;
  }

  ligar(): void {
    if (!this.ligado) {
      this.ligado = true;
    }
  }

  desligar(): void {
    if (this.ligado) {
      this.ligado = false;
    }
  }

  inverter(): void {
    this.ligado = !this.ligado;
  }

  estaLigado(): boolean {
    return this.ligado;
  }
}

const eq = new Equipamento();
eq.ligar();
console.log("Status (esperado true):", eq.estaLigado());
eq.ligar(); 
console.log("Status mantido (true):", eq.estaLigado());
eq.inverter();
console.log("Invertido (esperado false):", eq.estaLigado());
eq.desligar();
console.log("Status (esperado false):", eq.estaLigado());


class Conta {
  numero: string;
  saldo: number;

  constructor(numero: string, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
  }

  sacar(valor: number): boolean {
    if (this.saldo - valor < 0) {
      return false; 
    }
    this.saldo -= valor;
    return true; 
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  transferir(contaDestino: Conta, valor: number): boolean {
    if (!this.sacar(valor)) {
      return false; 
    }
    contaDestino.depositar(valor);
    return true;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}


class Jogador {
  forca: number;
  nivel: number;
  pontos: number;

  constructor(forca: number, nivel: number, pontos: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontos = pontos;
  }

  calcularAtaque(): number {
    return this.forca * this.nivel;
  }

  estaVivo(): boolean {
    return this.pontos > 0;
  }

  atacar(atacado: Jogador): void {
    if (!atacado.estaVivo()) {
      console.log("O jogador alvo já está morto. Ataque cancelado.");
      return;
    }
    const dano = this.calcularAtaque();
    atacado.pontos -= dano;
  }
}


const j1 = new Jogador(10, 2, 50); 
const j2 = new Jogador(8, 3, 40); 


j1.atacar(j2); 
j2.atacar(j1); 

console.log(`Pontos Jogador 1: ${j1.pontos}`); 
console.log(`Pontos Jogador 2: ${j2.pontos}`); 


if (j1.pontos > j2.pontos) {
  console.log("Jogador 1 tem mais pontos!");
} else if (j2.pontos > j1.pontos) {
  console.log("Jogador 2 tem mais pontos!");
} else {
  console.log("Empate!");
}