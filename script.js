function contar(){
    // aqui esta declarando as variaveis
    let inicio=document.getElementById("num1") 
    let fim =document.getElementById("num2")
    let passo =document.getElementById("num3")
    let res=document.getElementById("res")

    // aqui esta criando uma mesagem de erro caso o usuario não digite algum dado.
   if(inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0){
       window.alert('[ERRO] Faltam Dados !')
       res.innerHTML= "Impossível Contar ..." // caso o usuario esqueça de colocar 1 numero em algum campo
   }else{
       res.innerHTML='Contando ... <br>'
       let i =Number(inicio.value)//aqui pega o valor digitado em inicio e transforma em numero
       let f= Number(fim.value)//aqui pega o valor digitado no fim e transforma em numero
       let p=Number(passo.value)//aqui pega o valor digitado no passo e transforma em numero
     
       if(p <=0){
           window.alert("Passo Inválido ! Considerado Passo 1")
           p =1

       }
       if(i < f){// aqui é para quando o valor de inicio for menor do que o fim
        // aqui é uma contagem crescente
        for(let c = i; c <= f; c+=p){//o contador (c) vai começar no (i=inicio) e enquanto o contador(c) for menor ou igual ao (f)fim, ele recebe ele mesmo mais o (p)passo
        res.innerHTML+= c +' \u{1F449}'// esse sinal de += é para concatenação (o codigo \u{1F449} é para aparecer um emoji e só funciona entre Crase ' ')
        
        }
    }else{// aqui é para quando o valor de inicio for maior do que o fim
        // aqui é uma contagem regressiva ou decrescente
        for(let c = i; c >= f;c -=p){
            res.innerHTML+= c +'\u{1F449}'
        }
    }
        
    res.innerHTML+= '\u{1F3C1}' // aqui mostra o emoji da bandeira no final da contagem

   }

}