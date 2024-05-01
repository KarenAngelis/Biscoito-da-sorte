
//FUNÇÃO PARA CLICAR NO BISCOITO FECHADO E ABRIR O BISCOITO DA SORTE

function handleClick() {
    // Seleciona o elemento #closed-cookie e o elemento #open-cookie
    var closedCookie = document.getElementById('closed-cookie');
    var openCookie = document.getElementById('open-cookie');

    
    // Verifica se o elemento #closed-cookie existe
    if (closedCookie) {
        // Esconde o elemento #closed-cookie
        closedCookie.style.display = 'none';
    }
    
    // Verifica se o elemento #open-cookie existe
    if (openCookie) {
        // Exibe o elemento #open-cookie
        openCookie.style.display = 'block';
    }

}

//FUNÇÃO PARA CLICAR NO BISCOITO NO BOTÃO DO BISCOITO DA SORTE ABERTO E ELE VOLTAR AO ESTADO ORIGINAL

// Função para lidar com o clique no botão "Abrir Outro Biscoito"
function handleOpenAnotherCookie() {
    // Seleciona os elementos #closed-cookie e #open-cookie
    var closedCookie = document.getElementById('closed-cookie');
    var openCookie = document.getElementById('open-cookie');
    
    // Verifica se o elemento #closed-cookie existe e está oculto
    if (closedCookie && closedCookie.style.display === 'none') {
        // Exibe o elemento #closed-cookie
        closedCookie.style.display = 'block';
    }
    
    // Verifica se o elemento #open-cookie existe e está visível
    if (openCookie && openCookie.style.display !== 'none') {
        // Oculta o elemento #open-cookie
        openCookie.style.display = 'none';
    }
}

// Seleciona o botão "Abrir Outro Biscoito"
var openAnotherCookieButton = document.getElementById('open-another-cookie');

// Adiciona um ouvinte de eventos para o clique no botão
if (openAnotherCookieButton) {
    openAnotherCookieButton.addEventListener('click', handleOpenAnotherCookie);
}

//FUNÇÃO PARA ALTERAR E SORTEAR MENSAGENS ALEATÓRIAS:
// Array de mensagens aleatórias
var fortuneMessages = [
    "Seja Feliz, a vida é uma só",
    "Aproveite cada momento da sua vida",
    "Grandes realizações estão por vir",
    "Acredite nos seus sonhos e siga em frente",
    "Seja grato pelo que você tem",
    "Tudo vai dar certo no final",
    "Mantenha uma atitude positiva",
    "O sucesso está no seu horizonte"
];

// Função para selecionar uma mensagem aleatória
function selectRandomMessage() {
    // Gera um índice aleatório com base no comprimento do array de mensagens
    var randomIndex = Math.floor(Math.random() * fortuneMessages.length);
    // Retorna a mensagem correspondente ao índice aleatório
    return fortuneMessages[randomIndex];
}

// Função para atualizar o texto da mensagem no elemento HTML
function updateFortuneText() {
    // Seleciona o elemento <p> com o id "fortune-text"
    var fortuneTextElement = document.getElementById("fortune-text");
    // Verifica se o elemento foi encontrado
    if (fortuneTextElement) {
        // Seleciona uma mensagem aleatória
        var randomMessage = selectRandomMessage();
        // Atualiza o texto da mensagem no elemento HTML
        fortuneTextElement.textContent = randomMessage;
    }
}

// Função para recarregar a página
function reloadPage() {
    location.reload(); // Recarrega a página
}

// Adiciona um event listener ao botão "Abrir Outro Biscoito"
var openAnotherCookieButton = document.getElementById("open-another-cookie");
if (openAnotherCookieButton) {
    openAnotherCookieButton.addEventListener("click", reloadPage);
}

// Chama a função updateFortuneText() para exibir uma mensagem aleatória inicialmente
updateFortuneText();