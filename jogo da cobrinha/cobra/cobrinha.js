

var vel_serpent=5;//determina a velocidade do loopin na função principal main
var ultima_renderização=0;
const painel = document.getElementById('painel_de_movimento')//Captura o elemento do canvas e cria um painel
var score = document.getElementById("score")
var ponto = 0//pontuação

botao1.addEventListener('click',function(){{botaoapertado(this)}}, false)
botao2.addEventListener('click',function(){{botaoapertadomenos(this)}}, false)

var cobra_corpo=[{x:10, y:10}];//cobra começa com tres unidades da matriz
   // {x:11, y:10},
    //{x:12, y:10}];

const direcao={x:0,y:0}//faz a cobra andar
var posicao_do_ponto = [{x:Math.floor(Math.random()*30)+1,
    y:Math.floor(Math.random()*30)+1}];//posição randomica para a comida
const ultima_direcao = direcao


function listener(params) {
    
document.addEventListener('keydown',function(event) {console.info(event.key)
var tecla = event.key
switch(tecla)
    {case 'w'://cima
    if(ultima_direcao.y != 0)break
        direcao.x=0
        direcao.y=-1
        break
    case 's'://baixo
        if(ultima_direcao.y != 0)break
        direcao.x=0
        direcao.y=1
        break
    case 'a'://esquerda
        if(ultima_direcao.x != 0)break
        direcao.x=-1
        direcao.y=0
        break
    case 'd'://direita
        if(ultima_direcao.x != 0)break
        direcao.x=1
        direcao.y=0
        break}



})};


function desenho(params) {
        
    cobra_corpo.forEach(parametro_da_cobra => {
        const cobraElement = document.createElement('div');
        cobraElement.classList.add('cobra'); //Adiciona a lista de classes os elementos do corpo da cobra através do nome 'cobra'
        cobraElement.style.gridColumnStart = parametro_da_cobra.x; //diz em que posição o corpo da cobra inicilizara,através dos parametros x,y de cada div
        cobraElement.style.gridRowStart = parametro_da_cobra.y;
        painel.appendChild(cobraElement); //renderriza a serpente no painel
        return { parametro_da_cobra };})


};
           




function main(time) {//time: mostra o tempo em milisegundos entre uma chamada da função e a seguinte.Função de fazer o looping que movimenta a cobra e fazer as verificações que compõem as regras do jogo cada vez que o looping passar pelas funções
   
    window.requestAnimationFrame(main)

    var tempo_de_redenrizacao=(time-ultima_renderização)/1000//transformando o intervalo em segundos
    
    
    if (tempo_de_redenrizacao<1/vel_serpent) return
    ultima_renderização=time// Atualiazando a variavel ultima_renderização, de modo que todos os intervalos tenham intervalos de tempo próximos, no caso de meio segundo
    
    update()
    
    painel.innerHTML=""
    desenho()
    cria_ponto()
    update_food()//nova posição para comida após ser tocada
    
    //if(fora_do_painel()){if(confirm("voce perdeu o jogo")){window.location.reload()}}//verifica se a cobra ultrapassou os limites do painel
    
    listener()//recebe comando  do teclado
    if (colisao()){if(confirm("voce perdeu o jogo")){window.location.reload()}}
    if(fora_do_painel()){if(confirm("voce perdeu o jogo")){window.location.reload()}}//verifica se a cobra ultrapassou os limites do painel
    //console.log(ultima_renderização)
    //fora_do_painel()
    
        
}
    


function cria_ponto() {
        
    posicao_do_ponto 
    const pontoElement=document.createElement('div')
    pontoElement.classList.add('ponto')//Adiciona a lista de classes os elementos do corpo da cobra através do nome 'cobra'
    pontoElement.style.gridColumnStart=posicao_do_ponto[0].x //diz em que posição o corpo da cobra inicilizara,através dos parametros de cada div
    pontoElement.style.gridRowStart= posicao_do_ponto[0].y
    painel.appendChild(pontoElement)
    
}
    

   

window.requestAnimationFrame(main)
//chama a função quando o browser esta prestes a renderizar

function update(){
         for (let i=cobra_corpo.length-2;i>=0;i--)
          {cobra_corpo[i+1]={...cobra_corpo[i]}}//movimenta os segmentos
    cobra_corpo[0].x+=direcao.x;//direciona a cobra
    cobra_corpo[0].y+=direcao.y;
}


// Se o parametro da cobra encontrar com posicao aleatoria--> append no corpo da cobra e roda novamente funcao aleatoria





function colisao(){
    return cobra_corpo.some ((parametro_da_cobra, index)=>{
        console.log(index)
        if (index>0){
            return cobra_corpo[0].x==parametro_da_cobra.x && cobra_corpo[0].y==parametro_da_cobra.y
        }
        return false;

    } );
}
      


function update_food(){if (cobra_corpo[0].x=== posicao_do_ponto[0].x && cobra_corpo[0].y===posicao_do_ponto[0].y)
    {posicao_do_ponto=[{x:Math.floor(Math.random()*30)+1,
        y:Math.floor(Math.random()*30)+1}];
        if (valida_posicao_dacomida()==true){posicao_do_ponto=[{x:Math.floor(Math.random()*30)+1,
            y:Math.floor(Math.random()*30)+1}]}
        
        
     cobra_corpo.push({...cobra_corpo.length-1})
     ponto=ponto +1
     score.innerHTML   
     
    }
}
        
 
function fora_do_painel(){
    if(cobra_corpo[0].x > 30 || cobra_corpo[0].x<1 || cobra_corpo[0].y >30 || cobra_corpo[0].y<1)
    {return true} 
    if(cobra_corpo[0].x > 30 || cobra_corpo[0].x<1 || cobra_corpo[0].y >30 || cobra_corpo[0].y<1)
    {return true}  
}

function botaoapertado(botoes){vel_serpent+=1
    console.log(vel_serpent)
    
}

function botaoapertadomenos(){vel_serpent-=1;
console.log(vel_serpent)}

function valida_posicao_dacomida(){
     posicao_do_ponto.some ((parametro_da_cobra, index)=>{
    
    posicao_do_ponto.x==parametro_da_cobra.x && posicao_do_ponto.y==parametro_da_cobra.y
    })
}
    











  