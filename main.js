$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(00) 12345-0000'
    });
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: false
            }
        },
        messages: {
            nome: 'Por Favor, insira o seu nome completo',
            email: 'Por favor, insira o seu Email'
        },
        submitHandler: function(form){
            alert('Cadastro realizado com sucesso')
            return 0;
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existe ${camposIncorretos} campos incorreto`);
            }
        }
    });
})
