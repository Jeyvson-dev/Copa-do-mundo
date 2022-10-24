var key1 = document.getElementById('quarterkey1')
var key2 = document.getElementById('quarterkey2')
var key3 = document.getElementById('quarterkey3')
var key4 = document.getElementById('quarterkey4')

//Váriaveis para descobrir vencedor
var key1Team1
var key1Team2

var key2Team1
var key2Team2

var key3Team1
var key3Team2

var key4Team1
var key4Team2


loadKeys()

function loadKeys(){

var classifieldsQ = JSON.parse(localStorage.getItem('classifieldsQ'))
classifieldsQ.forEach(element => {


    if(element.key == "Chave 1" && element.first != "" ){

        key1Team1 = element.first       
    

    }
    if(element.key == "Chave 2" && element.first != "" ){

        key1Team2 = element.first
    

    }
    if(element.key == "Chave 3" && element.first != "" ){

        key2Team1 = element.first
    

    }
    if(element.key == "Chave 4" && element.first != "" ){

        key2Team2 = element.first
    

    }
    if(element.key == "Chave 5" && element.first != "" ){

        key3Team1 = element.first
    

    }
    if(element.key == "Chave 6" && element.first != "" ){

        key3Team2 = element.first
    

    }
    if(element.key == "Chave 7" && element.first != "" ){

        key4Team1 = element.first
        
    }
    if(element.key == "Chave 8" && element.first != "" ){

        key4Team2 = element.first
        
    }

    winner(key1Team1, key1Team2, key1)
    winner(key2Team1, key2Team2, key2)
    winner(key3Team1, key3Team2, key3)
    winner(key4Team1, key4Team2, key4)
    
    
})

}

function winner(team1, team2, keys) {

    let res1 = Math.floor(Math.random() * 6)
    let res2 = Math.floor(Math.random() * 6)

    if (res1 > res2) {

        keys.innerHTML = `<tr>
                          <td>
                          ${team1}</td>
                          <td>Vencedor</td> 
                          </tr>
                          <tr>                          
                          <td>${team2}</td>                            </tr>`

    } else if (res1 < res2) {

        keys.innerHTML = `<tr>
                            <td>
                            ${team2}</td> 
                            <td>Vencedor</td>              
                            </tr>
                            <tr>                         <td>${team1}</td>
                            </tr>`

    } if (res1 == res2) {

        let penaltT1 = Math.floor(Math.random() * 11)
        let penaltT2 = Math.floor(Math.random() * 11)

        if (penaltT1 > penaltT2) {

            keys.innerHTML = `<tr>
                            <td>
                          ${team1}</td>
                          <td>Vencedor</td> 
                          </tr>
                          <tr>                          
                          <td>${team2}</td>                            </tr>`

        } else if (penaltT1 < penaltT2) {

            keys.innerHTML = `<tr>
                                <td>
                                ${team2}</td> 
                                <td>Vencedor</td>                 
                                </tr>
                                <tr>                    
                                <td>${team1}
                                </td>                      </tr>`

        }

    }
}
catchClassifield()
function catchClassifield(){

    var tables = document.getElementById('container').children

    let  classifieldsS = []

    for (const tabela of tables) {

        for (const iterator of tabela.children) {
            
            let first = iterator.children[1].children[0].children[0].textContent.trim()
            let key = iterator.children[0].children[0].textContent.trim()

            classifieldsS.push(
                {
                    "key": key,
                    "first": first,
                }
            )
            
        }
        

    } 

    
    localStorage.setItem("classifieldsS",JSON.stringify(classifieldsS))
    localStorage.getItem("classifieldsS")

    
    
}

//Botão Página das oitavas de final
var botao3 = document.getElementById('button3')

function entrar() {


    botao3.style.background = "#F0EE29"
    botao3.style.color = "blue"
    botao3.style.boxShadow = "3px 3px 3px black"


}
function sair() {

    botao3.style.background = "#35E6C5"
    botao3.style.color = "black"
    botao3.style.boxShadow = "0px 0px 0px black"

}
function clicar() {

    window.location.href = "../semifinais&finais/semifinais&finais.html"

}