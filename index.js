const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = [] //criando um tabuleiro virtual e verificar se o jogador ganhou
let turnPlayer = ''

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer) //pegando o input onde os player digitaram o nome
    document.getElementById('turnPlayer').innerText = playerInput.value //passando para o span turnPlayer o valor do input player1 e player2
}

// função para inicializar o tabuleiro e não o jogo
function initializeGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']] //tabuleiro virtual
    turnPlayer = 'player1' //jogador inicial
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>' //texto inicial
    updateTitle()
    boardRegions.forEach(function (element) { //iteração nos spans do gameBoard
        element.classList.remove('win') //resetando o win
        element.innerText = '' //limpando os spans
        element.classList.add('cursor-pointer')
        element.addEventListener('click', handleBoardClick) //adicionando o X ou O nos spans
    })
}

// função para verificação de vitória
function getWinRegions() {
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
    return winRegions
}

// removendo a opção de clicar mais de uma vez em cada span
function disableRegion(element) {
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}

// função para pintar a região e encerrera o jogo
function handleWin(regions) {
    regions.forEach(function (region) {
        document.querySelector('[data-region="' + region + '"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + ' Venceu!'
}

function handleBoardClick(ev) {
    const span = ev.currentTarget //selecionando o span clicado
    const region = span.dataset.region //o data-region é N.N (um número seguido de outro número)
    const rowColumnPair = region.split('.') //split divide a string e transforma ele em um array, ou seja, onde tiver o '.' ele quebra e transforma em um array 1.2 -> ['1','2']
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === 'player1') {
        span.innerText = 'X' //atribuindo o valor X ao span clicado
        vBoard[row][column] = 'X' //marcando também no tabuleiro virtual
    } else {
        span.innerText = 'O'
        vBoard[row][column] = 'O'
    }
    console.clear()
    console.table(vBoard)
    disableRegion(span)
    const winRegions = getWinRegions()
    if (winRegions.length > 0) { //SE tiver alguma combinação do winRegions, algum jogador venceu
        handleWin(winRegions) //função encarregada de pintar e encerrar o jogo
    } else if (vBoard.flat().includes('')) { //retorna um elemento array com os subarrays concatenados dentro dele! se ele incluir algum espaço vazio, ele continua o jogo
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
        updateTitle() //troca o título
    } else {
        document.querySelector('h2').innerHTML = 'Empate!' //Se não bateu nenhuma combinação do winRegions e SE não tem espaço vazio no vBoard, ENTÃO deu empate
    }
}

document.getElementById('start').addEventListener('click', initializeGame)