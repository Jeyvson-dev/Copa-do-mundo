var tabelaFinal = document.getElementById('tabelafinal')
tabelaFinal.innerHTML = ``

var key1 = document.getElementById('quarterkey1')
var key2 = document.getElementById('quarterkey2')

//Váriaveis para descobrir vencedor
var key1Team1
var key1Team2

var key2Team1
var key2Team2

var data = JSON.parse(localStorage.getItem('data'))

console.log(data)

//Função para para declçarar os campeões
loadKey()
function loadKey(){
var classifieldsS = JSON.parse(localStorage.getItem('classifieldsS'))

classifieldsS.forEach(element => {
       
    if(element.key == "Chave 1" && element.first != ""){

        key1Team1 = element.first

    }
    if(element.key == "Chave 2" && element.first != ""){

        key1Team2 = element.first

    }
    if(element.key == "Chave 3" && element.first != ""){

        key2Team1 = element.first

    }
    if(element.key == "Chave 4" && element.first != ""){

        key2Team2 = element.first

    }    

    winner(key1Team1, key1Team2, key1)
    winner(key2Team1, key2Team2, key2)
 

})

}
//Função para pegar os campeões

function catchClassifield(){

    var tables = document.getElementById('container').children

    let  classifieldsF = []

    for (const tabela of tables) {

        for (const iterator of tabela.children) {
            
            let first = iterator.children[1].children[0].children[0].textContent.trim()
            let key = iterator.children[0].children[0].textContent.trim()

            classifieldsF.push(
                {
                    "key": key,
                    "first": first,
                }
            )
            
        }
        

    } 

    return classifieldsF
     
}

//Função para definir Vencedor
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

//Função para dedcisão final
function final(team1, team2, keys){

    let res1 = Math.floor(Math.random() * 6)
    let res2 = Math.floor(Math.random() * 6)

    if (res1 > res2) {

        keys.innerHTML = `<table border="1" id="final">
                            <tr>
                            <th colspan="3">
                            Grande Final
                            </th>
                            </tr>
                            <tr>
                            <th> Seleção </th>
                            <th>Vencedor</th>
                            </tr>
                            <tr>
                            <td>
                            ${team1}</td>
                            <td>Vencedor</td> 
                            </tr>
                            <tr>                          
                            <td>${team2}</td>                          </tr>`
        send(team1)
                          
    } else if (res1 < res2) {

        keys.innerHTML = `<table border="1" id="final">
                            <tr>
                            <th colspan="3">
                            Grande Final
                            </th>
                            </tr>
                            <tr>
                            <th> Seleção </th>
                            <th>Vencedor</th>
                            </tr>
                            <tr>
                            <td>
                            ${team2}</td>
                            <td>Vencedor</td> 
                            </tr>
                            <tr>                          
                            <td>${team1}</td>                          </tr>`
         send(team2)

    } if (res1 == res2) {

        let penaltT1 = Math.floor(Math.random() * 11)
        let penaltT2 = Math.floor(Math.random() * 11)

        if (penaltT1 > penaltT2) {

            keys.innerHTML = `<table border="1" id="final">
                                <tr>
                                <th colspan="3">
                                Grande Final
                                </th>
                                </tr>
                                <tr>
                                <th> Seleção </th>
                                <th>Vencedor</th>
                                </tr>
                                <tr>
                                <td>
                                ${team1}</td>
                                <td>Vencedor</td> 
                                </tr>
                                <tr>                          
                                <td>${team2}</td>                          </                   tr>`
         send(team1)

        } else if (penaltT1 < penaltT2) {

            keys.innerHTML = `<table border="1" id="final">
                                <tr>
                                <th colspan="3">
                                Grande Final
                                </th>
                                </tr>
                                <tr>
                                <th> Seleção </th>
                                <th>Vencedor</th>
                                </tr>
                                <tr>
                                <td>
                                ${team2}</td>
                                <td>Vencedor</td> 
                                </tr>
                                <tr>                          
                                <td>${team1}</td>                          </tr>`
            send(team2)
        }
        
    }

       

}

var botao4 = document.getElementById('button4')

function entrar() {


    botao4.style.background = "#F0EE29"
    botao4.style.color = "blue"
    botao4.style.boxShadow = "3px 3px 3px black"


}
function sair() {

    botao4.style.background = "#35E6C5"
    botao4.style.color = "black"
    botao4.style.boxShadow = "0px 0px 0px black"

}
function clicar() {

 

    final(catchClassifield()[0].first,catchClassifield()[1].first, tabelaFinal)

  
    


}

//Função para enviar para API

function send(winner){
   
    let body = {

        "equipeA": winner 

    }
   var myHeaders = new Headers();
    myHeaders.append("git-user", "Jeyvson-dev");
    
    var requestOptions = {
        
        body: JSON.stringify(body),
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch('https://estagio.geopostenergy.com/WorldCup/InsertFinalResult', requestOptions)

   


}

