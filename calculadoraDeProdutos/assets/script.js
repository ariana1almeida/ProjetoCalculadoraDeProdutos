function adicionar() {
    var quantidade = document.getElementById("button1");
    quantidade.value=parseInt(quantidade.value)+1;

    var valorUnitario=document.getElementById("unitaryValue1")
    var valorTotal=document.getElementById("total1")

    valorTotal.innerText=(quantidade.value*valorUnitario.value).toFixed(2);
    
}

function remover() {
    var quantidade = document.getElementById("button1");
    quantidade.value=parseInt(quantidade.value)-1;

    var valorUnitario=document.getElementById("unitaryValue1")
    var valorTotal=document.getElementById("total1")

    valorTotal.innerText=Math.round(quantidade.value*valorUnitario.value).toFixed(2)
}
