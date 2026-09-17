function busca() {
    console.log("Apertou")

    fetch('db.json').then(resposta => resposta.json()).then(banco => {
        //Variável que busca o valor digitado pelo usuário
        let identificador = document.getElementById('valor').value
        let encontrado = false

       banco.forEach(pessoa => {
        if(identificador == pessoa.fpc) {
          document.getElementById('nome').innerHTML = pessoa.name
          document.getElementById('sobrenome').innerHTML = pessoa.lastname
          document.getElementById('cidade').innerHTML = pessoa.city
          document.getElementById('pais').innerHTML = pessoa.country
          document.getElementById('CPF').innerHTML = pessoa.fpc
          document.getElementById('imagem').innerHTML = pessoa.image
    
          
          encontrado = true
        }
       })
       if(!encontrado) {
        document.getElementById('erro').innerHTML = "CPF não encontrado"
       }
    })
}