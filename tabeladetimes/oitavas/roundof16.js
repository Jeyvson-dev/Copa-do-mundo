var botao2 = document.getElementById('button2')
var tables = document.getElementById('container')
var key1 = document.getElementById('quarterkey1')
var key2 = document.getElementById('quarterkey2')
var key3 = document.getElementById('quarterkey3')
var key4 = document.getElementById('quarterkey4')
var key5 = document.getElementById('quarterkey5')
var key6 = document.getElementById('quarterkey6')
var key7 = document.getElementById('quarterkey7')
var key8 = document.getElementById('quarterkey8')
//Váriaveis para descobrir vencedor
var key1Team1
var key1Team2

var key2Team1
var key2Team2

var key3Team1
var key3Team2

var key4Team1
var key4Team2

var key5Team1
var key5Team2

var key6Team1
var key6Team2

var key7Team1
var key7Team2

var key8Team1
var key8Team2

//Fim dàs variáveis

loadKey()
//Função para definir os jogos das chaves
function loadKey(){
 var classifields = JSON.parse(localStorage.getItem('classifields'))
classifields.forEach((element, index) => {

    if (element.group == 'Grupo A' && element.first != "") {
        key1Team1 = element.first
    }
    if (element.second != "" && element.group == 'Grupo B') {
        key1Team2 = element.first
    }
    else if (element.group == 'Grupo C' && element.first != "") {
        key2Team1 = element.first
    }
    if (element.group == 'Grupo D' && element.second != "") {
        key2Team2 = element.second
    } else if (element.group == 'Grupo E' && element.first != "") {
        key3Team1 = element.first
    }
    if (element.group == 'Grupo F' && element.second != "") {
        key3Team2 = element.second
    } else if (element.group == 'Grupo G' && element.first != "") {
        key4Team1 = element.first
    }
    if (element.group == 'Grupo H' && element.second != "") {
        key4Team2 = element.second
    } else if (element.group == 'Grupo B' && element.first != "") {
        key5Team1 = element.first
    }
    if (element.group == 'Grupo A' && element.second != "") {
        key5Team2 = element.second

    } else if (element.group == 'Grupo D' && element.first != "") {
        key6Team1 = element.first
    }
    if (element.group == 'Grupo C' && element.second != "") {
        key6Team2 = element.second
    } else if (element.group == 'Grupo E' && element.first != "") {
        key7Team1 = element.first
    }
    if (element.group == 'Grupo E' && element.second != "") {
        key7Team2 = element.second
    } else if (element.group == 'Grupo H' && element.first != "") {
        key8Team1 = element.first
    }
    if (element.group == 'Grupo G' && element.second != "") {
        key8Team2 = element.second
    }

    //Chamada da função definir os campeões
    winner(key1Team1, key1Team2, key1)

    winner(key2Team1, key2Team2, key2)

    winner(key3Team1, key3Team2, key3)

    winner(key4Team1, key4Team2, key4)

    winner(key5Team1, key5Team2, key5)

    winner(key6Team1, key6Team2, key6)

    winner(key7Team1, key7Team2, key7)

    winner(key8Team1, key8Team2, key8)

    
})
catchClassifield()
}

function catchClassifield(){

    var tables = document.getElementById('container').children

    let  classifieldsQ = []

    for (const tabela of tables) {

        for (const iterator of tabela.children) {
            
            let first = iterator.children[1].children[0].children[0].textContent.trim()
            let key = iterator.children[0].children[0].textContent.trim()




            classifieldsQ.push(
                {
                    "key": key,
                    "first": first,
                }
            )
            
        }
        

    } 

    
    localStorage.setItem("classifieldsQ",JSON.stringify(classifieldsQ))
    localStorage.getItem("classifieldsQ")

    
    
}

//Função para descobrir vencedor dos jogos

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

//Botão Página das oitavas de final
function entrar2() {


    botao2.style.background = "#F0EE29"
    botao2.style.color = "blue"
    botao2.style.boxShadow = "3px 3px 3px black"

}
function sair2() {

    botao2.style.background = "#35E6C5"
    botao2.style.color = "black"
    botao2.style.boxShadow = "0px 0px 0px black"

}
function clicar2() {

    window.location.href = "../quartas/roundof8.html"


}