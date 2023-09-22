function Aluno(n,i){
  this.nome = n   
  this.idade = i
  this.ola = function(){
      alert("oi, meu nome é " + this.nome + "e eu tenho " + this.idade + " anos")
  }
}
let a1 = new Aluno("Elbston Souza Lima Filho", 17)
console.log(a1)
a1.ola()
