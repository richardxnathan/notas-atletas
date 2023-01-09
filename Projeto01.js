let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   for (let i = 0; i < atletas.length; i++) {
        console.log(`Atleta: ${atletas[i].nome}`)
        console.log(`Notas Obtidas: ${atletas[i].notas}`)
        let notasCrescentes = atletas[i].notas
        notasCrescentes.sort((a, b) => {
            if(a<b)return -1
        })
        
        let notasParaMedia = notasCrescentes.slice(1,4)
        
        let somaDasNotas = notasParaMedia.reduce(function(total, atual){
        return total + atual
        })
        
        let media = somaDasNotas/(atletas[i].notas.push()-2) 
        console.log(`Média Válida: ${media}`)
        console.log(` `)
   }