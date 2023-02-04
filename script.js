let idade = prompt("Qual a sua Idade");
alert("Sua Idade é "+idade);

if (idade >= 18)
{
  alert("Pode entrar");
}
else
{
  alert("Não pode entrar");
}

let reciboPagamento = parseInt(prompt("Digitee o valor do seu pagamento"));

let valorPagamento = 500;
parseInt(valorPagamento);
if (reciboPagamento > valorPagamento)
{
  let troco = reciboPagamento - valorPagamento;
  alert("Seu Troco é "+troco);
}
else{
let controleCalote = reciboPagamento < valorPagamento;

if (controleCalote == true)
{
  alert("Você não pagou o valor devido. Fora!");
}
else
{
  alert("Tudo certo, voce pode entrar");
}
}
alert("Tudo certo, voce pode entrar");