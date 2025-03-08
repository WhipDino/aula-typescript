// Exercício 1 
// Criação da interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // motor é opcional
}

// Criação do objeto meuCarro que implementa a interface Carro
const meuCarro: Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    motor: '2.0'
};
// Exibindo os dados no console
console.log(meuCarro);



// Exercício 2 
// Criação da interface Multiplicacao
interface Multiplicacao {
    (a: number, b: number): number; // A função recebe dois números e retorna um número
  }
   
  // Implementação da função multiplicar
  const multiplicar: Multiplicacao = (a, b) => {
    return a * b; // Retorna o produto dos dois números
  };
   
  // Testando a função com diferentes valores
  console.log(multiplicar(2, 3)); // Resultado: 6
  console.log(multiplicar(4, 5)); // Resultado: 20
  console.log(multiplicar(10, 0)); // Resultado: 0
  console.log(multiplicar(-2, 3)); // Resultado: -6




  // Exercicio 3 
  // Função genérica que inverte um array de qualquer tipo
function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse(); // Usando o método reverse para inverter o array
  }
   
  // Testando com um array de números
  const numeros = [1, 2, 3, 4, 5];
  const numerosInvertidos = inverterArray(numeros);
  console.log(numerosInvertidos); // Resultado: [5, 4, 3, 2, 1]
   
  // Testando com um array de strings
  const palavras = ['maçã', 'banana', 'cereja'];
  const palavrasInvertidas = inverterArray(palavras);
  console.log(palavrasInvertidas); // Resultado: ['cereja', 'banana', 'maçã']




  //Exercicio 4
  interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
 
class Usuario1 {
    constructor(public nome: string, public email: string) {}
}
 
class RepositorioUsuario1 implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
 
    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }
 
    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}
 
// Exemplo de uso:
const repo1 = new RepositorioUsuario1();
repo1.salvar(new Usuario1("João Silva", "joao@email.com"));
repo1.salvar(new Usuario1("Maria Souza", "maria@email.com"));
 
console.log(repo1.obterTodos());



// Exercicio 5 
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
 
type RespostaServidor2 = string | boolean;
 
function processarResposta2(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    } else {
        console.log(resposta ? "Operação bem-sucedida." : "Operação falhou.");
    }
}
 
class Usuario2 {
    constructor(public nome: string, public email: string) {}
}
 
class RepositorioUsuario2 implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
 
    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }
 
    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}
 
// Exemplo de uso:
const repo2 = new RepositorioUsuario2();
repo2.salvar(new Usuario2("João Silva", "joao@email.com"));
repo2.salvar(new Usuario2("Maria Souza", "maria@email.com"));
 
console.log(repo2.obterTodos());




// Exercicio 6
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
 
type RespostaServidor = string | boolean;
 
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    } else {
        console.log(resposta ? "Operação bem-sucedida." : "Operação falhou.");
    }
}
 
type Estudante = {
    nome: string;
    curso: string;
};
 
type Trabalhador = {
    empresa: string;
    cargo: string;
};
 
type EstudanteTrabalhador = Estudante & Trabalhador;
 
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos Mendes",
    curso: "Engenharia de Software",
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Júnior"
};
 
console.log(estudanteTrabalhador);
 
class Usuario {
    constructor(public nome: string, public email: string) {}
}
 
class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
 
    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }
 
    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}
 
// Exemplo de uso:
const repo = new RepositorioUsuario();
repo.salvar(new Usuario("João Silva", "joao@email.com"));
repo.salvar(new Usuario("Maria Souza", "maria@email.com"));
 
console.log(repo.obterTodos());