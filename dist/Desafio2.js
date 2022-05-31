"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'Carla',
    idade: 23,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: 'Pedro',
    idade: 39,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: 'Luana',
    idade: 19,
    profissao: Trabalho.Atriz
};
