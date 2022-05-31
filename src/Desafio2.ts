enum Trabalho {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Pessoa = {
    nome: 'Carla',
    idade: 23,
    profissao: Trabalho.Atriz
};

let pessoa2: Pessoa = {
    nome: 'Pedro',
    idade: 39,
    profissao: Trabalho.Padeiro
};

let pessoa3: Pessoa = {
    nome: 'Luana',
    idade: 19,
    profissao: Trabalho.Atriz
};