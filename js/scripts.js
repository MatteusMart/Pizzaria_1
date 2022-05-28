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
                $('div.camarao').addClass('animate__animated animate__fadeInUp')
                $('div.tomate').addClass('animate__animated animate__fadeInUp')
                $('div.folha2').addClass('animate__animated animate__fadeInUp')
                $('div.queijo').addClass('animate__animated animate__fadeInUp')
            } if(direcao =="up"){
                $('div.folha1').removeClass('animate__animated animate__fadeInUp')
                $('div.folha3').removeClass('animate__animated animate__fadeInUp')
                $('div.camarao').removeClass('animate__animated animate__fadeInUp')
                $('div.tomate').removeClass('animate__animated animate__fadeInUp')
                $('div.folha2').removeClass('animate__animated animate__fadeInUp')
                $('div.queijo').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            //offset= indica a quantos pixels antes do elemento começará a ser aplicado
            offset:'450px;'
        })

    $('div#transicao-testemunha-plano').waypoint(
        function(direcao){
            if(direcao =="down"){
                $('div#decoracao1').addClass('animate__animated animate__fadeInLeft')
                $('div#decoracao2').addClass('animate__animated animate__fadeInUp')
                $('div#decoracao3').addClass('animate__animated animate__fadeInRight')
            }if(direcao =="up"){
                $('div#decoracao1').removeClass('animate__animated animate__fadeInLeft')
                $('div#decoracao1').removeClass('animate__animated animate__fadeInUp')
                $('div#decoracao3').removeClass('animate__animated animate__fadeInRight')
            }
        },{
            offset:'550px;'
        }
    )