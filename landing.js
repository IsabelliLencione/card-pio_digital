// 1. selcionar os elementos omportados (botao, mensagem)
//2. verificar se o app pode ser instaldo
//3. adicionar o evento de instalação no botão
//4. verificar se a instalção deu certo 

//1.
const botaoInstalar = document.getElementById("install-button");
const msgInstalar = document.getElementById("install-message");

let eventoInstalacao = null;


//2.
// o navegadaor dispara um evento automaticamente, se detectar que o app é instavél
//para verificar se isso aconteceu:

window.addEventListener("beforeinstallprompt", (event) =>{
    event.preventDefault();
    //guardar o evento de instalação para usar depois:
    eventoInstalacao = event;
    //fazer o botao de intalação reaparecer
    botaoInstalar.hidden = false;
    //mudar a mensagem:
    msgInstalar.textContent = "Essa aplicação pode ser instalada.";
});


//3.
//Fazer botão de instalar, instalar:
botaoInstalar.addEventListener("click", ()=> {
    if(!eventoInstalacao) {
        //Se não existe evento de instalar, não instala
        return;
    }
    //O comando de aparecer para instalar é:
    eventoInstalacao.prompt();
    //Depois de instalar, faz o  botão sumir novamente
    botaoInstalar.hidden = true;
    eventoInstalacao = null;
});

//4.
//Se funcionou a instalação o navegador dispara o evento appinstalled

window.addEventListener("appinstalled", ()=> {
    msgInstalar.textContent = "O app foi instalado com sucesso. Você já pode abrir o aplicativo.";

    botaoInstalar.hidden = true;
    eventoInstalacao = null;
});