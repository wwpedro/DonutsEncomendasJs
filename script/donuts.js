//pag 59 do livro (58 pdf) mostra o mesmo exemplo feito de forma diferente.
//livro: cp2 use a cabeça java script

function SubtotalON(){
    const taxa = 0.1;
    const preco = 0.5;
    //pode deixar esses id's em variaveis como fiz na funcao ValidarDonuts();
    //porem o jeito abaixo foi a soluccao que achei mais eficiente para mudar as coisas em html
    //modigivando nos campos , apesar que desse mode é muito grande . mas faz a mesma coisa em 3 linhas
    document.getElementById("subtotalDonuts").value ="R$"+(parseFloat(document.getElementById("donutCobertura").value)+parseFloat(document.getElementById("donutSimples").value))*preco;
    document.getElementById("taxaDonuts").value ="R$"+((parseFloat(document.getElementById("donutCobertura").value)+parseFloat(document.getElementById("donutSimples").value))*preco)*taxa;
    document.getElementById("totalDonuts").value="R$"+(((parseFloat(document.getElementById("donutCobertura").value)+parseFloat(document.getElementById("donutSimples").value))*preco)+(((parseFloat(document.getElementById("donutCobertura").value)+parseFloat(document.getElementById("donutSimples").value))*preco)*taxa));
    /*pega local que vc bota a informação:<input type="text" class="form-control" id="donutSimples" onchange="SubtotalON()">
      onchange faz isso, td oq bota lá no html que está ligadoo a essa função fica registrado e em conjunto com a duncionalidade
      readyonly vc faz parecer no html fazendo a funcionalidade na função que vc de finil parar os campos com onchange então
      td fica dinâmico
      <input type="text" class="form-control" id="subtotalDonuts" readonly>
      ou tbm pode usar outra logica usando onBlur="funcao();" no lugar do readonly tirando o onchange;
    */
}

function ValidarDonuts(){
    let nomeUsuarioDonut = document.getElementById("nomeDonuts").value;
    let doudonutSimples = document.getElementById("donutSimples").value;
    let donutCobertura = document.getElementById("donutCobertura").value;
    let retirarDonuts = document.getElementById("retirarDonuts").value;
    let subtotalDonuts = document.getElementById("subtotalDonuts").value;
    let taxaDonuts = document.getElementById("taxaDonuts").vaue;
    let totalDonuts = document.getElementById("totalDonuts").value;
    
    
    if(nomeUsuarioDonut!=null && nomeUsuarioDonut!=""){
        return true;
    }else{
        alert("preencha o campo Nome corretamente");
    }

    //parseInt ou Float transforma a caractere "1"(string) em numero 1. só pra dar mais enfase q é um numero pra o programa
    //A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN
    //NaN NÃO é numero . é apenas uma condição(tipo idefined) enquato não tem argumentos/infomraçoes o sufuciente para fazer um calculo
    if(parseInt(donutSimples)){
        return true;
    }else{
        alert("preencha o campo Donut Simples corretamente");
    }

    if(parseInt(donutCobertura)){
        return true;
    }else{
        alert("preencha o campo Donut Com Cobertura corretamente");
    }

    if(parseInt(retirarDonuts)){
        return true;
    }else{
        alert("preencha o campo Minutos até retirar corretamente");
    }

    SubtotalON();

}
