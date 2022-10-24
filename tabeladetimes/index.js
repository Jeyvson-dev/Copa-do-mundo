var myHeaders = new Headers();
myHeaders.append("git-user", "Jeyvson-dev");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}

fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', requestOptions)
    .then((resp) => resp.json())
    .then(function (data) {

        localStorage.setItem("data",JSON.stringify(data))
        localStorage.getItem("data")
       
        var times = data.Result.sort((a, b) => 0.5 - Math.random())


        var groupA = times.slice(0, 4)
        tableFields(groupA, document.getElementById('tablebody1'), matter(groupA), balance(groupA))

        var groupB = times.slice(4, 8)
        tableFields(groupB, document.getElementById('tablebody2'), matter(groupB), balance(groupB))

        var groupC = times.slice(8, 12)
        tableFields(groupC, document.getElementById('tablebody3'), matter(groupC), balance(groupC))

        var groupD = times.slice(12, 16)
        tableFields(groupD, document.getElementById('tablebody4'), matter(groupD), balance(groupD))

        var groupE = times.slice(16, 20)
        tableFields(groupE, document.getElementById('tablebody5'), matter(groupE), balance(groupE))

        var groupF = times.slice(20, 24)
        tableFields(groupF, document.getElementById('tablebody6'), matter(groupF), balance(groupF))

        var groupG = times.slice(24, 28)
        tableFields(groupG, document.getElementById('tablebody7'), matter(groupG), balance(groupG))

        var groupH = times.slice(28, 32)
        tableFields(groupH, document.getElementById('tablebody8'), matter(groupH), balance(groupH))

        
        catchClassifield()
    })
    // .catch(function (error) {
    //     console.log(error)
    // })

    //Função para pegar os classificados
    function catchClassifield(){

    let tables = document.getElementById('container').children
    let  classifields = []

    for (const tabela of tables) {

        for (const iterator of tabela.children) {
            
            let first = iterator.children[1].children[0].children[0].textContent
            let group = iterator.children[0].children[0].textContent.trim()
            let second = iterator.children[1].children[1].children[0].textContent


            classifields.push(
                {
                    "group": group,
                    "first": first,
                    "second": second
                }
            )
            
        }
        

    } localStorage.setItem("classifields",JSON.stringify(classifields))
    localStorage.getItem("classifields")

    
    
}


//Função para dividir os times em grupos
function tableFields(group, table, score, balance) {



    group.forEach((element, index) => {

        
        table.innerHTML += `<tr>                          
            <td id="tablebody1">${element.Name}</td>
            <td id="score">${score[index]}</td>
            <td id="balance">${balance[index]}</td>
            </tr>`

    })

}

//Função para definir a quantidade de Pontos de cada time
function matter(group) {

    var nextPhaseTeam = []
    var team1 = [0, 0, 0]
    var team2 = [0, 0, 0]
    var team3 = [0, 0, 0]
    var team4 = [0, 0, 0]

    var result = results()
    var result2 = results2()

    team1[0] += result[0]
    team2[0] += result[2]
    team3[0] += result2[0]
    team4[0] += result2[2]

    if (team1[0] > team3[0]) {

        team1[2] += 3
        team3[2] += 0


    } else if (team1[0] < team3[0]) {

        team3[2] += 3
        team1[2] += 0

    } else if (team1[0] == team3[0]) {

        team3[2] += 1
        team1[2] += 1

    }

    if (team1[0] > team4[0]) {

        team1[2] += 3
        team4[2] += 0

    } else if (team1[0] < team4[0]) {

        team4[2] += 3
        team1[2] += 0

    } else if (team1[0] == team4[0]) {

        team4[2] += 1
        team1[2] += 1

    }

    if (team1[0] > team2[0]) {

        team2[2] += 3
        team1[2] += 0

    } else if (team1[0] < team2[0]) {

        team2[2] += 0
        team1[2] += 3

    } else if (team1[0] == team2[0]) {

        team2[2] += 1
        team1[2] += 1

    }

    if (team2[0] > team3[0]) {

        team2[2] += 3
        team3[2] += 0

    } else if (team2[0] < team3[0]) {

        team3[2] += 3
        team2[2] += 0

    } else if (team2[0] == team3[0]) {

        team3[2] += 1
        team2[2] += 1

    }

    if (team2[0] > team4[0]) {

        team2[2] += 3
        team4[2] += 0

    } else if (team2[0] < team4[0]) {

        team4[2] += 3
        team2[2] += 0

    } else if (team2[0] == team4[0]) {

        team4[2] += 1
        team2[2] += 1

    }

    if (team3[0] > team4[0]) {

        team3[2] += 3
        team4[2] += 0

    } else if (team3[0] < team4[0]) {

        team4[2] += 3
        team3[2] += 0

    } else if (team3[0] == team4[0]) {

        team4[2] += 1
        team3[2] += 1

    }

    return [team1[2], team2[2], team3[2], team4[2]].sort().reverse()

}

//Função para descobrir o saldo de Gols da partida
function balance(group) {

    let team1balance = 0
    let team2balance = 0
    let team3balance = 0
    let team4balance = 0

    let balance = results()
    let balance2 = results2()

    team1balance += balance[1]
    team2balance += balance[3]
    team3balance += balance2[1]
    team4balance += balance2[3]


    return [team1balance, team2balance, team3balance, team4balance]

}

//Função para descobrir saldo de gols definir vencedor da partida
function results() {

    let team1Score = 0
    let team2Score = 0

    let team1Balance = 0
    let team2Balance = 0

    let res1 = Math.floor(Math.random() * 6)
    let res2 = Math.floor(Math.random() * 6)


    if (res1 < res2) {

        team1Balance = res1 - res2
        team2Balance = res2 - res1

        team1Score = 3

    } else if (res2 > res1) {

        team2Balance = res2 - res1
        team1Balance = res1 - res2

        team2Score = 3

    } else {

        team1Score++
        team2Score++


    } return [team1Score, team1Balance, team2Score, team2Balance]

}
//Função para descobrir saldo de gols e definir vencedor da partida da segunda metade da tabela
function results2() {

    let team1Score = 0
    let team2Score = 0

    let team1Balance = 0
    let team2Balance = 0

    let res1 = Math.floor(Math.random() * 6)
    let res2 = Math.floor(Math.random() * 6)


    if (res1 < res2) {

        team1Balance = res1 - res2
        team2Balance = res2 - res1

        team1Score = 3

    } else if (res2 > res1) {

        team2Balance = res2 - res1
        team1Balance = res1 - res2

        team2Score = 3

    } else {

        team1Score++
        team2Score++


    } return [team1Score, team1Balance, team2Score, team2Balance]

}
//Botão "Oitavas de final" e interações
var botao = document.getElementById('button')

function entrar() {


    botao.style.background = "#F0EE29"
    botao.style.color = "blue"
    botao.style.boxShadow = "3px 3px 3px black"


}
function sair() {

    botao.style.background = "#35E6C5"
    botao.style.color = "black"
    botao.style.boxShadow = "0px 0px 0px black"

}
function clicar() {

    window.location.href = "oitavas/roundof16.html"

}