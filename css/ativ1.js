function sendReqGet(){ //esse é a requisição feita AJAX que está retornando o objeto response com os elementos abaixo
    return {
        response:[  {nome: "CADERNO", tipo: "A", "preco": 10.30},
                    {nome: "CANETA", tipo: "A", "preco": 4},
                    {nome: "A CULPA É DAS ESTRELAS", tipo: "B", "preco": 90},
                    {nome: "HARRY POTTER", tipo: "B", "preco": 50},
                    {nome: "HARRY POTTER2", tipo: "C", "preco": 50},
                    {nome: "HARRY POTTER3", tipo: "D", "preco": 50}
                ]
    }
}
function sumByType(){ // essa é a função sumByType()
    var objeto = sendReqGet(); //aqui eu pego o objeto sendReqGet() e atribuo a variavel objeto
    var tipoA = objeto.response.filter(obj => obj.tipo == 'A'); //pego o apenas os objetos do tipo A e coloco em uma variavel "tipoA"
    var tipoB = objeto.response.filter(obj => obj.tipo == 'B'); //pego o apenas os objetos do tipo B e coloco em uma variavel "tipoB"
    var valorA = tipoA.map(x => x.preco).reduce(function(x , y){ //aqui eu pego os valores de preço do objeto já filtrado apenas com os do Tipo A e já somo os preços com o .reduce
        return x+y;
    }, 0);
    var valorB = tipoB.map(x => x.preco).reduce(function(x , y){ //aqui eu pego os valores de preço do objeto já filtrado apenas com os do Tipo B e já somo os preços com o .reduce
        return x+y;
    }, 0);
    
    var valor = [valorA, valorB]; //aqui eu crio um array e coloco os valores que eu somei Tipo A e Tipo B

 

    console.log(valor); //coloco para exibir no consele.log()
}
window.onload = sumByType; //faz a função ser iniciada automaticamente sem precisar clicar em nada 