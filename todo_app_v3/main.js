$(document).ready(function() {


    $('button').on('click', function() {
        var elemento_lista= $('#textarea').val();{
            if(elemento_lista.length==0){
                alert('Debes ingresar una tarea');
                return;
                
            }
            else{
                $('#listado').append('<li><input type="checkbox" id="check"><span>'+ elemento_lista + '<img id="tacho"src="img/trash.png" alt=""></img></span></li>');
                $('#textarea').val('');
                return;

                
            }
        
        }
    })

    $(document).on('click', '#tacho', function(){
        $(this).parent().parent().remove(); 

    })


    $(document).on('click', '#check', function(){
        if( $(this).is('input:checked') ){
            $(this).siblings().css('text-decoration-line','line-through');

        }
        else {
            $(this).siblings().css('text-decoration-line','none');

        }

        

    })
 
         
})