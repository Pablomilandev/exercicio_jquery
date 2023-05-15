$(document).ready(function() {
    
    $('form').submit(function(e) {
        e.preventDefault(); 
        
        const enderecoNomeTarefa = $('#endereco-nome-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${enderecoNomeTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $("li").click(function () {
            $(this).addClass("riscado");
        })
        $('#endereco-nome-tarefa').val("");
    })
})



