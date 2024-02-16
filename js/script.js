$(document).ready(function() {
    $(".saiba-mais").click(function() {
        var target = $(this).data("target");
        $("#" + target).toggle(); // Mostra ou oculta o resumo ao clicar no botão
    });
});