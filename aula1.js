const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function Aluno(n,i){
    this.nome = n   
    this.idade = i
}
let a1 = new Aluno("Elbston", 17)
console.log(a1)