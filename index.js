const mod1 = require("./modulo1");
const mod2 = require("./modulo2");

mod1("Meu primeiro módulo Node.js");
mod2.imprimirMensagem("Meu segundo módulo Node.js");

// Desestruturando

const { imprimirMensagem, imprimirTexto } = require("./modulo2");

imprimirMensagem("Meu segundo módulo Node.ks")
imprimirTexto("Bla bla bla")
