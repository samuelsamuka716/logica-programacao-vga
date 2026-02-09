

// DEIXA A DIV GAME ESCONDIDA
window.onload = function() {
    document.getElementById('game').style.visibility = 'hidden';
};

function Jogador(nome, forma) {
    this.nome = nome;
    this.forma = forma;
}

var jogador1, jogador2;
var jogadorAtual;
var formas = ['X', 'O'];
var tabuleiro = new Array(9);

// Função que inicia o jogo
var initGame = function() {
    var nomeJogador1 = document.getElementById('jogador1').value;
    var nomeJogador2 = document.getElementById('jogador2').value;
    
    // Cria os jogadores com as formas X (0) e O (1)
    jogador1 = new Jogador(nomeJogador1, 0); 
    jogador2 = new Jogador(nomeJogador2, 1); 
    
    jogadorAtual = jogador1;
    setLabelJogadorAtual();

    // APOS DEFINIÇÃO DE JOGADORES, EXIBE A DIV E INICIA JOGO
    document.getElementById('game').style.visibility = 'visible';
}

// Reinicia a partida
var reset = function() { 
    window.location.reload(); 
}

// Seta o nome do jogador da rodada na página HTML
var setLabelJogadorAtual = function() {
    document.getElementById('jogadorAtual').innerHTML = 'Jogador atual: ' + jogadorAtual.nome;
}

// Verifica se houve vencedor nas linhas
var allElementsInSomeLine = function() {
    for(var i = 0; i < 7; i += 3) {
        if (tabuleiro[i] == 'X' && tabuleiro[i+1] == 'X' && tabuleiro[i+2] == 'X') {
            alert(jogador1.nome + ' wins!!!');
            reset();
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i+1] == 'O' && tabuleiro[i+2] == 'O') {
            alert(jogador2.nome + ' wins!!!');
            reset();
        }
    }
}

// Verifica se houve vencedor nas colunas
var allElementsInSomeColumn = function() {
    for(var i = 0; i < 3; i++) {
        if (tabuleiro[i] == 'X' && tabuleiro[i+3] == 'X' && tabuleiro[i+6] == 'X') {
            alert(jogador1.nome + ' wins!!!');
            reset();
        }
        if (tabuleiro[i] == 'O' && tabuleiro[i+3] == 'O' && tabuleiro[i+6] == 'O') {
            alert(jogador2.nome + ' wins!!!');
            reset();
        }
    }
}

// --- PEQUENO COMPLEMENTO PARA O CLIQUE FUNCIONAR ---
// (Essa parte conecta o clique na tabela com o seu array)
function jogar(posicao) {
    if (tabuleiro[posicao] == undefined) {
        // Define a forma (X ou O) baseada no jogador atual
        var forma = (jogadorAtual == jogador1) ? 'X' : 'O';
        tabuleiro[posicao] = forma;
        document.getElementById(posicao).innerHTML = forma;
        
        // Verifica vitórias usando SUAS funções
        allElementsInSomeLine();
        allElementsInSomeColumn();
        
        // Troca o jogador
        jogadorAtual = (jogadorAtual == jogador1) ? jogador2 : jogador1;
        setLabelJogadorAtual();
    }
}