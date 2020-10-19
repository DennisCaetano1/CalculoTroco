$('#etapa2').hide();
$('#etapa3').hide();
var soma_produtos = 0;
var valor_pago =0;

function adicionar(){
    soma_produtos += parseFloat($('#ValorTotalProduto').val());
    $('#ValorTotalLabel').html(soma_produtos);
    $('#ValorTotalProduto').val(0);
}

function proximaEtapa(){
    $('#etapa1').hide();
    $('#etapa2').show();
}

function troco() {
    $('#etapa2').hide();
    $('#etapa3').show();
    valor_pago = parseInt($('#ValorPago').val());

    var total = valor_pago - soma_produtos;

    if (total < 0) {
        alert("Valor pago insuficiente")
    } else {
        if (total == 0) {
            alert("Não é necessário troco")
        } else {

            $('#nota100').html(Math.trunc(total / 100));
            total = total % 100;

            $('#nota50').html(Math.trunc(total / 50));
            total = total % 50;

            $('#nota20').html(Math.trunc(total / 20));
            total = total % 20;

            $('#nota10').html(Math.trunc(total / 10));
            total = total % 10;

            $('#nota5').html(Math.trunc(total / 5));
            total = total % 5;

            $('#nota2').html(Math.trunc(total / 2));
            total = total % 2;

            $('#moeda1').html(Math.trunc(total / 1));
            total = total % 1;

            $('#moeda50').html(Math.trunc(total / 0.5));
            total = total % 0.5;

            $('#moeda25').html(Math.trunc(total / 0.25));
            total = total % 0.25;

            $('#moeda10').html(Math.trunc(total / 0.1));
            total = total % 0.1;

            $('#moeda5').html(Math.trunc(total / 0.05));
            total = total % 0.05;


        }
    }
}
