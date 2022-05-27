    /*exibe menu*/

    function mostraMenu(){
        $('nav ul#esquerda').css('display','flex');
        $('nav ul#direita').css('display','flex');
    }

    function escondeMenu(){
        $('nav ul#esquerda').css('display','none');
        $('nav ul#direita').css('display','none');
    }

    var controle = true;

    $('nav ul#icone-menu-mobile').click(function(){
        if(controle == true){
            mostraMenu();
            controle=false;
        }else{
            escondeMenu();
            controle=true;
        }
        
    })

    // animação dps elementos do site
    $('section#final-de-semana').waypoint(
        function(direcao){
            if(direcao =="down"){
                $('div.folha1').addClass('animate__animated animate__fadeInUp')
                $('div.folha3').addClass('animate__animated animate__fadeInUp')
            } if(direcao =="up"){
                $('div.folha1').removeClass('animate__animated animate__fadeInUp')
                $('div.folha3').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            //offset= indica a quantos pixels antes do elemento começará a ser aplicado
            offset:'450px;'
        })