//Variaveis que ajudarão no Javascript;
let fundo = "Fundo Super Mario";
//Variavel para som dos ID {Pontos, PontosDigitos};
let audioIcone = new Audio("Audios/New Super Mario World - Nintendo Logo.mp3");
let audioTexto = new Audio();
let conteudo = "Principal";
let intervalo = "";
let piscadinha = "";
let aleatorio = 0;
let contador = 0;
let numeroPortfolio = 0;

function tocarSom() {
    document.getElementById("pontosDigitos").style.visibility = "visible";
    //Pontuação de Super Mario;
    if (fundo == "Fundo Super Mario") {
        if (contador == 9) {
            document.getElementById("pontosDigitos").textContent = "1 UP";
            document.getElementById("pontosDigitos").style.color = "chartreuse";
            audioIcone.src = "Audios/smw_1-up.mp3";
            audioIcone.play();
            document.getElementById("pontosDigitos").animate([{ transform: "translateY(15px)" }, { transform: "translateY(50px)" }], { duration: 300 });
        } else {
            audioIcone.src = "Audios/New Super Mario World - Nintendo Logo.mp3";
            contador++;
            audioIcone.play();
            if (contador == 1) {
                document.getElementById("pontosDigitos").textContent = "100";
            } else if (contador == 2) {
                document.getElementById("pontosDigitos").textContent = "200";
            } else if (contador == 3) {
                document.getElementById("pontosDigitos").textContent = "400";
            } else if (contador == 4) {
                document.getElementById("pontosDigitos").textContent = "500";
            } else if (contador == 5) {
                document.getElementById("pontosDigitos").textContent = "1000";
            } else if (contador == 6) {
                document.getElementById("pontosDigitos").textContent = "2000";
            } else if (contador == 7) {
                document.getElementById("pontosDigitos").textContent = "4000";
            } else if (contador == 8) {
                document.getElementById("pontosDigitos").textContent = "5000";
            } else if (contador == 9) {
                document.getElementById("pontosDigitos").textContent = "8000";
            }
            document.getElementById("pontosDigitos").animate([{ transform: "translateY(15px)" }, { transform: "translateY(50px)" }], { duration: 400 });
        }
        //Pontuação de Sonic - The Hedgehog;
    } else if (fundo == "Fundo Sonic") {
        contador = 0;
        document.getElementById("pontos").src = "Imagens/Ring - Sonic.gif";
        document.getElementById("pontos").style.width = "50px";
        document.getElementById("pontos").style.marginTop = "35px";
        document.getElementById("pontos").style.marginLeft = "20px";
        audioIcone.src = "Audios/Ring - Sonic.mp3";
        audioIcone.play();
        document.getElementById("pontos").animate([{ transform: "translateY(50px)" }, { transform: "translateY(80px)" }], { duration: 750 });
        //Pontuação de Megaman;
    } else if (fundo == "Fundo Megaman") {
        document.getElementById("pontos").src = "Imagens/Blue Orb - Magaman 1.png";
        document.getElementById("pontos").style.width = "40px";
        document.getElementById("pontos").style.marginTop = "50px";
        document.getElementById("pontos").style.marginLeft = "30px";
        audioIcone.src = "Audios/26 - BonusBall.wav";
        audioIcone.play();
        document.getElementById("pontos").animate([{ transform: "translateY(30px)" }, { transform: "translateY(60px)" }], { duration: 500 });
    }
}
//Função que troca o fundo do corpo, dos botões e a música do site
function mudarFundoBotoes() {
    //se mapa for do Super Mario World, troca para o do Sonic
    if (fundo == "Fundo Super Mario") {
        document.body.style.backgroundImage = "url('Imagens/Sonic Green Hill Zone.gif')";
        document.body.style.backgroundSize = "140%";
        document.getElementById("sobre-mim").style.backgroundImage = "url('Imagens/Sonic - Item Box.jpg')";
        document.getElementById("formacao").style.backgroundImage = "url('Imagens/Sonic - Item Box.jpg')";
        document.getElementById("portfolio").style.backgroundImage = "url('Imagens/Sonic - Item Box.jpg')";
        document.getElementById("contatos").style.backgroundImage = "url('Imagens/Sonic - Item Box.jpg')";
        document.getElementById("botao1").style.backgroundImage = "url('Imagens/Sonic - Item Box.jpg')";
        document.getElementById("botao2").style.backgroundImage = "url('Imagens/Sonic - Item Box.jpg')";
        document.getElementById("botao3").style.backgroundImage = "url('Imagens/Sonic - Item Box.jpg')";
        document.getElementById("sobre-mim").style.color = "white";
        document.getElementById("formacao").style.color = "white";
        document.getElementById("downloadPortfolio").style.color = "white";
        document.getElementById("contatos").style.color = "white";
        document.getElementById("botao1").style.color = "white";
        document.getElementById("botao2").style.color = "white";
        document.getElementById("botao3").style.color = "white";
        document.getElementById("icone").src = "Imagens/Sonic.gif";
        document.getElementById("icone").setAttribute("title", "Sonic");
        document.getElementById("somDeFundo").src = "Audios/Sonic the Hedgehog - Green Hill Zone.mp3";
        fundo = "Fundo Sonic";
        //se mapa for do Sonic, troca para o do Megaman
    } else if (fundo == "Fundo Sonic") {
        document.body.style.backgroundImage = "url('Imagens/Megaman First Phase.jpg')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundColor = "black";
        document.getElementById("sobre-mim").style.backgroundImage = "url('Imagens/Cidade.jpg')";
        document.getElementById("formacao").style.backgroundImage = "url('Imagens/Cidade.jpg')";
        document.getElementById("portfolio").style.backgroundImage = "url('Imagens/Cidade.jpg')";
        document.getElementById("contatos").style.backgroundImage = "url('Imagens/Cidade.jpg')";
        document.getElementById("botao1").style.backgroundImage = "url('Imagens/Cidade.jpg')";
        document.getElementById("botao2").style.backgroundImage = "url('Imagens/Cidade.jpg')";
        document.getElementById("botao3").style.backgroundImage = "url('Imagens/Cidade.jpg')";
        document.getElementById("icone").src = "Imagens/Megaman.gif";
        document.getElementById("icone").setAttribute("title", "Megaman");
        document.getElementById("somDeFundo").src = "Audios/Mega Man 2 - Title Screen.mp3";
        fundo = "Fundo Megaman";
        //se mapa for do Megaman, volta para o do Super Mario World;
    } else if (fundo == "Fundo Megaman") {
        document.body.style.backgroundImage = "url('Imagens/Super Mario World - Background.gif')";
        document.body.style.backgroundSize = "140%";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundPositionY = "bottom";
        document.getElementById("sobre-mim").style.backgroundImage = "url('Imagens/Super Mario Bros - Mystery Box.jpg')";
        document.getElementById("formacao").style.backgroundImage = "url('Imagens/Super Mario Bros - Mystery Box.jpg')";
        document.getElementById("portfolio").style.backgroundImage = "url('Imagens/Super Mario Bros - Mystery Box.jpg')";
        document.getElementById("contatos").style.backgroundImage = "url('Imagens/Super Mario Bros - Mystery Box.jpg')";
        document.getElementById("botao1").style.backgroundImage = "url('Imagens/Super Mario Bros - Mystery Box.jpg')";
        document.getElementById("botao2").style.backgroundImage = "url('Imagens/Super Mario Bros - Mystery Box.jpg')";
        document.getElementById("botao3").style.backgroundImage = "url('Imagens/Super Mario Bros - Mystery Box.jpg')";
        document.getElementById("sobre-mim").style.color = "black";
        document.getElementById("formacao").style.color = "black";
        document.getElementById("downloadPortfolio").style.color = "black";
        document.getElementById("contatos").style.color = "black";
        document.getElementById("botao1").style.color = "black";
        document.getElementById("botao2").style.color = "black";
        document.getElementById("botao3").style.color = "black";
        document.getElementById("icone").src = "Imagens/Mario.gif";
        document.getElementById("icone").setAttribute("title", "Mario");
        document.getElementById("somDeFundo").src = "Audios/Super Mario Bros. - Running About.mp3";
        fundo = "Fundo Super Mario";
        //Easter Egg???
    } else if (fundo == "Sonic?") {
        //Coisas Somem...
        document.getElementById("sobre-mim").style.visibility = "hidden";
        document.getElementById("formacao").style.visibility = "hidden";
        document.getElementById("portfolio").style.visibility = "hidden";
        document.getElementById("contatos").style.visibility = "hidden";
        document.getElementById("botao1").style.visibility = "hidden";
        document.getElementById("botao2").style.visibility = "hidden";
        document.getElementById("botao3").style.visibility = "hidden";
        document.getElementById("base").style.visibility = "hidden";
        document.getElementById("pontos").style.visibility = "hidden";
        document.getElementById("pontosDigitos").style.visibility = "hidden";
        document.getElementById("titulo").style.visibility = "hidden";
        document.getElementById("texto").style.visibility = "hidden";
        document.getElementById("meuIcone").style.visibility = "hidden";
        document.getElementById("infoMeuIcone").style.visibility = "hidden";
        document.getElementById("trocarFundo").style.visibility = "hidden";
        document.getElementById("infoTrocarFundo").style.visibility = "hidden";
        document.getElementById("titulo2").style.visibility = "hidden";
        document.getElementById("legenda").style.visibility = "hidden";
        document.getElementById("tabelaBotoes").style.visibility = "hidden";
        document.getElementById("imagemSobreMim").style.visibility = "hidden";
        //Sonic? O que aconteceu contigo, meu filho???
        document.getElementById("Eu").src = "Imagens/Sonic - What Happend.jpg";
        document.getElementById("Eu").style.width = "200px";
        document.getElementById("icone").removeAttribute("onclick");
        document.getElementById("icone").removeAttribute("title");
        document.getElementById("icone").style.visibility = "visible";
        document.getElementById("icone").style.opacity = "0%";
        //Há algo se fechando atrás de mim!;
        audioIcone.src = "Audios/Castle Stone Door Close 2 - QuickSounds.com.mp3";
        audioIcone.play();
        document.getElementById("somDeFundo").src = "none";
        document.body.style.backgroundImage = "url('none')";
        document.body.style.backgroundSize = "60%";
        document.body.style.backgroundPosition = "top";
        document.body.style.backgroundColor = "black";
        document.getElementById("icone").style.width = "300px";
        document.getElementById("icone").style.height = "300px";
        document.getElementById("icone").style.gridColumnStart = "11";
        document.getElementById("icone").style.gridRowStart = "4";
        document.getElementById("icone").style.gridRowEnd = "15";
        document.body.animate([{ backgroundColor: "white" }, { backgroundColor: "black" }], { duration: 8000 });
        document.getElementById("Eu").animate([{ opacity: "0%" }, { opacity: "100%" }], { duration: 8000 });
        //Sonic?! *Tom de voz horrorizado*;
        setTimeout(() => { audioIcone.src = "Audios/Light.mp3"; audioIcone.play(); document.body.style.backgroundImage = "url('Imagens/Good Bye.png')" }, 8100);
        setTimeout(() => { document.getElementById("icone").animate([{ opacity: "0%" }, { opacity: "3%" }], { duration: 1000 }); setTimeout(() => { document.getElementById("icone").style.opacity = "3%" }, 1000); document.getElementById("icone").src = "Imagens/SonicEX.gif" }, 8700);
        //Quem está rindo?!!!;
        setTimeout(() => { intervalo = setInterval(() => { audioIcone.src = "Audios/Sonic.EXE.mp3"; audioIcone.play() }, 2500) }, 6500);
        document.getElementById("titulo").style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
        document.getElementById("titulo").textContent = "You're Not Alone";
        document.getElementById("titulo").style.color = "yellow";
        document.getElementById("titulo").style.border = "10px";
        document.getElementById("titulo").style.borderColor = "red";
        document.getElementById("titulo").style.fontSize = "100px";
        document.getElementById("titulo").style.gridColumnStart = "2";
        document.getElementById("titulo").style.gridColumnEnd = "25";
        document.getElementById("titulo").style.gridRowStart = "1";
        document.getElementById("titulo").style.gridRowEnd = "3";
        audioTexto.src = "Audios/S1_CA.wav";
        //ǝW puᴉꓞ;
        setTimeout(() => { document.getElementById("icone").setAttribute("title", "???"); audioTexto.play(); piscadinha = setInterval(() => { document.getElementById("titulo").style.visibility = "visible"; setTimeout(() => { document.getElementById("titulo").style.visibility = "hidden" }, 200) }, 200); document.getElementById("icone").addEventListener("mouseover", () => { document.getElementById("icone").style.cursor = "pointer" }); document.getElementById("icone").addEventListener("click", jumpscare) }, 11000);
    }
}
//Troca fundo e música do corpo dependendo do mapa que estiver, o mesmo para os dois de baixo;
function mudarFundoBotao1() {
    if (fundo == "Fundo Super Mario") {
        document.body.style.backgroundImage = "url('Imagens/Super Mario World - Background.gif')";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundSize = "140%";
        document.getElementById("somDeFundo").src = "Audios/Super Mario Bros. - Running About.mp3";
    } else if (fundo == "Fundo Sonic") {
        document.body.style.backgroundImage = "url('Imagens/Sonic Green Hill Zone.gif')";
        document.body.style.backgroundSize = "140%";
        document.getElementById("somDeFundo").src = "Audios/Sonic the Hedgehog - Green Hill Zone.mp3";
    } else if (fundo == "Fundo Megaman") {
        document.body.style.backgroundImage = "url('Imagens/Megaman First Phase.jpg')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundPositionY = "bottom";
        document.getElementById("icone").src = "Imagens/Megaman.gif";
        document.getElementById("icone").setAttribute("title", "Megaman");
        document.getElementById("somDeFundo").src = "Audios/Mega Man 2 - Title Screen.mp3";
    }
}

function mudarFundoBotao2() {
    if (fundo == "Fundo Super Mario") {
        document.body.style.backgroundImage = "url('Imagens/Super Mario Bros - Underground.gif')";
        document.body.style.backgroundSize = "130%";
        document.body.style.backgroundColor = "black";
        document.getElementById("somDeFundo").src = "Audios/Super Mario Bros. - Underground.mp3";
    } else if (fundo == "Fundo Sonic") {
        document.body.style.backgroundImage = "url('Imagens/Sonic - Cassino Night.gif')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundColor = "black";
        document.getElementById("somDeFundo").src = "Audios/Sonic the Hedgehog 2 - Casino Night (2 Player).mp3";
    } else if (fundo == "Fundo Megaman") {
        document.body.style.backgroundImage = "url('Imagens/Megaman - Gutsman Stage.jpg')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundColor = "rgba(0,0,168,255)";
        document.body.style.backgroundPositionY = "bottom";
        document.getElementById("icone").src = "Imagens/Gutsman.gif";
        document.getElementById("icone").setAttribute("title", "Guts Man")
        document.getElementById("somDeFundo").src = "Audios/Mega Man - Guts Man.mp3";
    }
}

function mudarFundoBotao3() {
    if (fundo == "Fundo Super Mario") {
        document.body.style.backgroundImage = "url('Imagens/Super Mario Bros - Underwater.gif')";
        document.body.style.backgroundSize = "115%";
        document.body.style.backgroundColor = "rgb(92,148,252)";
        document.getElementById("somDeFundo").src = "Audios/Super Mario Bros. - Swimming Around.mp3";
    } else if (fundo == "Fundo Sonic") {
        document.body.style.backgroundImage = "url('Imagens/Sonic - Aquatic Ruin.gif')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundColor = "rgba(0,0,136,255)";
        document.getElementById("somDeFundo").src = "Audios/Sonic the Hedgehog 2 - Aquatic Ruin Zone.mp3";
    } else if (fundo == "Fundo Megaman") {
        document.body.style.backgroundImage = "url('Imagens/Megaman - Heat Man Stage.jpg')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundPositionY = "center";
        document.getElementById("icone").src = "Imagens/Heat Man.gif";
        document.getElementById("icone").setAttribute("title", "Heat Man");
        document.getElementById("somDeFundo").src = "Audios/Mega Man 2 - Heat Man.mp3";
    }
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
/*Função do botão "Sobre Mim": Troca o texto atual para outro, em busca de falar sobre 
mim e algumas curiosidades sobre mim*/;
function sobreMim() {
    //Retorna ao texto inicial;
    if (conteudo == "SobreMim") {
        conteudo = "Principal";

        document.getElementById("titulo").textContent = "Tudo sobre esse Portfólio - Luigi Giampaoli";

        document.getElementById("texto").textContent = `Ola indivíduo que está 
        observando esse site, meu nome, como mostrado, é Luigi Giampaoli, e busco fazer 
        esse site com o objetivo de mostrar minhas habilidades de programação web e, 
        informações sobre mim, desde: formações acadêmicas, idiomas, experiência 
        profissional; além de possibilitar para download meu portfólio, podendo escolher 
        entre português e inglês e se quiser fazer contatos comigo, há o botão de 
        'Contatos' para podermos trocar assuntos e ideias. Portanto, vou mostrar 
        alguns detalhes que fiz nesse site que pode achar interessante e que 
        demonstram-me como um bom programador:`;
        document.getElementById("texto").style.visibility = "visible";

        document.getElementById("meuIcone").textContent = "Meu Icone: ";
        document.getElementById("meuIcone").style.gridColumnStart = "4";
        document.getElementById("meuIcone").style.gridColumnEnd = "8";
        document.getElementById("meuIcone").style.gridRowStart = "9";
        document.getElementById("meuIcone").style.gridRowEnd = "10";
        document.getElementById("meuIcone").style.visibility = "visible";

        document.getElementById("infoMeuIcone").textContent = `Se clicar no meu ícone, ele 
        vai fazer alguma coisa dependendo do mapa que tiver. Por exemplo, você começa no 
        mapa de "Super Mario Bros"(Role para baixo para poder ver a primeira fase do Mario),
        portanto se clicar no meu ícone, irá receber uma quantidade de pontos até receber o
        "1 UP"`;
        document.getElementById("infoMeuIcone").style.gridColumnStart = "7";
        document.getElementById("infoMeuIcone").style.gridColumnEnd = "22";
        document.getElementById("infoMeuIcone").style.gridRowStart = "9";
        document.getElementById("infoMeuIcone").style.gridRowEnd = "10";

        document.getElementById("trocarFundo").textContent = "Troca de Imagens:";
        document.getElementById("trocarFundo").style.visibility = "visible";
        document.getElementById("trocarFundo").style.gridColumnStart = "3";
        document.getElementById("trocarFundo").style.gridColumnEnd = "10";
        document.getElementById("trocarFundo").style.gridRowStart = "11";
        document.getElementById("trocarFundo").style.gridRowEnd = "12";
    
        document.getElementById("infoTrocarFundo").textContent = `Ao clicar o botão do 
        personagem (Canto Superior Direito), o fundo do site e dos botões irão trocar 
        por outras imagens ou cores, fazendo com que, consequentemente, a função do 
        'Meu ícone' mude também;`;
        document.getElementById("infoTrocarFundo").style.gridColumnStart = "8";
        document.getElementById("infoTrocarFundo").style.gridColumnEnd = "22";

        document.getElementById("titulo2").textContent = "Um resumo rapido sobre os botões acima";
        document.getElementById("titulo2").style.visibility = "visible";

        document.getElementById("tabelaBotoes").style.visibility = "visible";

        document.getElementById("imagemSobreMim").style.visibility = "hidden";
        Sô̴̢ṉ̷͂ǐ̴̭ɔ̴͆͜();
    } else {
        //Acessa ao texto "Sobre Mim";
        conteudo = "SobreMim";

        document.getElementById("texto").textContent = `Meu nome é Luigi Giampaoli, tenho 
        19 anos e faço aniversário em 20 de Janeiro (data de nascimento: 20/01/2004). 
        Sou Programador e estudo no Centro Universitário Internacional Uninter para 
        obter meu Tecnólogo em Análise e Desenvolvimento de Sistemas; Eu começei a 
        programar há 6 meses atrás (Maio de 2023) e sempre busco me aprimorar, tanto na 
        minha carreira profissional quanto nas minhas habilidades sociais (Soft Skills).`;
        document.getElementById("texto").style.visibility = "visible";

        document.getElementById("infoMeuIcone").style.gridColumnStart = "6";
        document.getElementById("infoMeuIcone").style.gridColumnEnd = "22";
        document.getElementById("infoMeuIcone").style.gridRowStart = "8";
        document.getElementById("infoMeuIcone").style.gridRowEnd = "16";
        document.getElementById("infoMeuIcone").textContent = `Minha primeira linguagem 
        de programação foi o Java e minha primeira IDE (Ambiente de Desenvolvimento 
        Integrado / Integrated Development Environment) foi a Intellij e agora 
        (12/10/2023) estou usando o Visual Studio Code por conta da facilidade em 
        instalar outras linguagens e de 'Commitar' os meus projetos para o GitHub. Eu, 
        além de programador, sou um cara que curte jogos antigos (como você pode ver no 
        meu site), como Super Mario, onde o meus favoritos são o Super Mario World para 
        SNES e Super Mario RPG do Game-Boy Advanced, e Sonic, principalmente o Sonic the
        Hedgehog 2 (por conta das músicas serem excelentes e combinarem com o mapa) e o
        Sonic Adventures para GameBoy Advanced.`;

        document.getElementById("infoTrocarFundo").textContent = `Além de Curtir os
        jogos de 8-BITS e 16_BITS, também jogo jogos como League Of Legends 
        (mas estou me cansando aos poucos dele), Hollow Knight, Portal 2 e Wizard of
        Legends (um jogo onde você controla um mago e tem que explorar uma dungeon
        derrotando varios seres e chefões de diferentes elementos "combando" diversos
        golpes elementais e itens para facilitar sua jornada). Voltando ao assunto, se
        quiser me conhecer melhor ou querer me chamar para sua empresa, meu Email e
        meu número de celular estarão disponiveis para uso (é só clicar em contatos que
        receberá um pop-up com meus contatos)`;
        document.getElementById("infoTrocarFundo").style.gridRowStart = "11";
        document.getElementById("infoTrocarFundo").style.gridRowEnd = "12";
        document.getElementById("infoTrocarFundo").style.gridColumnStart = "6";
        document.getElementById("infoTrocarFundo").style.gridColumnEnd = "22";

        document.getElementById("titulo").textContent = "Sobre Mim";

        document.getElementById("meuIcone").style.visibility = "hidden";

        document.getElementById("trocarFundo").style.visibility = "hidden";

        document.getElementById("titulo2").style.visibility = "hidden";
        
        document.getElementById("tabelaBotoes").style.visibility = "hidden";

        document.getElementById("imagemSobreMim").style.visibility = "visible";

        document.getElementById("listaSobreMim").textContent = "Sobre Mim: ";

        document.getElementById("listaFormacao").textContent = "Formação: ";

        document.getElementById("listaPortfolio").textContent = "Portfólio: ";

        document.getElementById("listaContatos").textContent = "Contatos: ";

        document.getElementById("listaInfoSobreMim").textContent = "Exibe dados sobre o criador;";

        document.getElementById("listaInfoFormacao").textContent = "Mostra formação acadêmica, experiência profissional e idiomas do criador";

        document.getElementById("listaInfoPortfolio").textContent = "Possibilita baixar o portfolio do criador;";

        document.getElementById("listaInfoContatos").textContent = "Demonstra meios de comunicação do criador;";

        document.getElementById("legenda").style.visibility = "hidden";
        Sô̴̢ṉ̷͂ǐ̴̭ɔ̴͆͜();
    }
}

/*Função do botão "Formação": Troca o texto atual para outro, em busca de falar sobre 
minhas habilidades de programação, meus conhecimentos de outras linguas e seus niveis*/;
function formacao() {
    //Retorna para o texto original;
    if (conteudo == "Formacao") {
        conteudo = "Principal";

        document.getElementById("titulo").textContent = "Tudo sobre esse Portfólio - Luigi Giampaoli";

        document.getElementById("texto").textContent = `Ola indivíduo que está 
        observando esse site, meu nome, como mostrado, é Luigi Giampaoli, e busco fazer 
        esse site com o objetivo de mostrar minhas habilidades de programação web e, 
        consequentemente, informaões sobre mim, desde: formações acadêmicas, idiomas, 
        experiência profissional; além de possibilitar para download meu portfólio, 
        podendo escolher entre português e inglês e se quiser fazer contatos comigo, 
        há o botão de 'Contatos' para podermos trocar assuntos e ideias. Portanto, 
        vou mostrar alguns detalhes que fiz nesse site que pode achar interessante e que 
        demonstram-me como um bom programador:`;
        document.getElementById("texto").style.visibility = "visible";

        document.getElementById("meuIcone").textContent = "Meu Icone: ";
        document.getElementById("meuIcone").style.gridColumnStart = "4";
        document.getElementById("meuIcone").style.gridColumnEnd = "8";
        document.getElementById("meuIcone").style.gridRowStart = "9";
        document.getElementById("meuIcone").style.gridRowEnd = "10";
        document.getElementById("meuIcone").style.visibility = "visible";


        document.getElementById("infoMeuIcone").textContent = `Se clicar no meu ícone, 
        ele vai fazer alguma coisa dependendo do mapa que tiver. Por exemplo, você 
        começa no mapa de "Super Mario Bros"(Role para baixo para poder ver a primeira 
        fase do Mario), portanto se clicar no meu ícone, irá receber uma quantidade de 
        pontos até receber o "1 UP"`;
        document.getElementById("infoMeuIcone").style.gridColumnStart = "7";
        document.getElementById("infoMeuIcone").style.gridColumnEnd = "22";
        document.getElementById("infoMeuIcone").style.gridRowStart = "9";
        document.getElementById("infoMeuIcone").style.gridRowEnd = "10";

        document.getElementById("trocarFundo").textContent = "Troca de Imagens:";
        document.getElementById("trocarFundo").style.visibility = "visible";
        document.getElementById("trocarFundo").style.gridColumnStart = "3";
        document.getElementById("trocarFundo").style.gridColumnEnd = "10";
        document.getElementById("trocarFundo").style.gridRowStart = "11";
        document.getElementById("trocarFundo").style.gridRowEnd = "12";

        document.getElementById("infoTrocarFundo").textContent = `Ao clicar o botão do 
        personagem (Canto Superior Direito), o fundo do site e dos botões irão trocar 
        por outras imagens ou cores, fazendo com que, consequentemente, a função do 
        'Meu ícone' mude também;`;
        document.getElementById("infoTrocarFundo").style.gridColumnStart = "8";
        document.getElementById("infoTrocarFundo").style.gridColumnEnd = "22";
        document.getElementById("infoTrocarFundo").style.gridRowStart = "11";
        document.getElementById("infoTrocarFundo").style.gridRowEnd = "12";

        document.getElementById("titulo2").textContent = "Um resumo rapido sobre os botões acima";
        document.getElementById("titulo2").style.visibility = "visible";

        document.getElementById("tabelaBotoes").style.visibility = "visible";

        document.getElementById("imagemSobreMim").style.visibility = "hidden";

        document.getElementById("listaSobreMim").textContent = "Sobre Mim: ";

        document.getElementById("listaFormacao").textContent = "Formação: ";

        document.getElementById("listaPortfolio").textContent = "Portfólio: ";

        document.getElementById("listaContatos").textContent = "Contatos: ";
        
        document.getElementById("listaInfoSobreMim").textContent = "Exibe dados sobre o criador;";

        document.getElementById("listaInfoFormacao").textContent = "Mostra formação acadêmica, experiência profissional e idiomas do criador";

        document.getElementById("listaInfoPortfolio").textContent = "Possibilita baixar o portfolio do criador;";

        document.getElementById("listaInfoContatos").textContent = "Demonstra meios de comunicação do criador;";

        document.getElementById("legenda").style.visibility = "hidden";
        Sô̴̢ṉ̷͂ǐ̴̭ɔ̴͆͜();
    } else {
        conteudo = "Formacao";

        document.getElementById("titulo").textContent = "Formação e Idiomas";

        document.getElementById("texto").style.visibility = "hidden";

        document.getElementById("meuIcone").textContent = "Experiência Profissional:";
        document.getElementById("meuIcone").style.gridColumnStart = "4";
        document.getElementById("meuIcone").style.gridColumnEnd = "10";
        document.getElementById("meuIcone").style.gridRowStart = "6";
        document.getElementById("meuIcone").style.gridRowEnd = "7";
        document.getElementById("meuIcone").style.visibility = "visible";

        document.getElementById("infoMeuIcone").textContent = `Eu não tive muita 
        experiência na minha carreira profissional como Programador, porém eu já 
        trabalhei antes, mas não na minha área: Eu trabalhei no Fórum de Tramandaí como 
        bolsista, onde minhas principais funções eram: Organização de Processos, 
        Auxiliar no Atendimento no Balcão, Auxiliar no Atendimento do Telefone Público e Procurar e 
        Encontrar Processos. no meio de todas essas funções, a unica que eu usava meu 
        conhecimento era só na organização de processos, pois além de colocar os 
        processos na pilha certa, precisava armazenar o processo no Banco de Dados da 
        empresa, para descobrir em qual pilha ele deveria estar.`;
        document.getElementById("infoMeuIcone").style.paddingLeft = "10px";
        document.getElementById("infoMeuIcone").style.gridColumnStart = "9";
        document.getElementById("infoMeuIcone").style.gridColumnEnd = "22";
        document.getElementById("infoMeuIcone").style.gridRowStart = "6";
        document.getElementById("infoMeuIcone").style.gridRowEnd = "7";

        document.getElementById("infoTrocarFundo").textContent = `Ao clicar o botão do 
        personagem (Canto Superior Direito), o fundo do site e dos botões irão trocar 
        por outras imagens ou cores, fazendo com que, consequentemente, a função do 
        'Meu ícone' mude também;`;
        document.getElementById("infoTrocarFundo").style.gridColumnStart = "8";
        document.getElementById("infoTrocarFundo").style.gridColumnEnd = "22";
        document.getElementById("infoTrocarFundo").style.gridRowStart = "10";
        document.getElementById("infoTrocarFundo").style.gridRowEnd = "11";

        document.getElementById("titulo2").style.visibility = "visible";

        document.getElementById("tabelaBotoes").style.visibility = "visible";

        document.getElementById("trocarFundo").textContent = "Formação Acadêmica:";
        document.getElementById("trocarFundo").style.visibility = "visible";
        document.getElementById("trocarFundo").style.gridColumnStart = "3";
        document.getElementById("trocarFundo").style.gridColumnEnd = "10";
        document.getElementById("trocarFundo").style.gridRowStart = "10";
        document.getElementById("trocarFundo").style.gridRowEnd = "11";

        document.getElementById("titulo2").style.visibility = "visible";
        document.getElementById("titulo2").textContent = "Idiomas";

        document.getElementById("imagemSobreMim").style.visibility = "hidden";

        document.getElementById("listaSobreMim").textContent = "HTML5";
        document.getElementById("listaSobreMim").style.gridRow = "1";

        document.getElementById("listaFormacao").textContent = "Java/Python";
        document.getElementById("listaFormacao").style.gridRow = "2";

        document.getElementById("listaPortfolio").textContent = "Inglês";
        document.getElementById("listaPortfolio").style.gridRow = "3";

        document.getElementById("listaContatos").textContent = "Português(BR)";
        document.getElementById("listaContatos").style.gridRow = "4";

        document.getElementById("listaInfoSobreMim").textContent = "◙◙○○○";
        document.getElementById("listaInfoSobreMim").style.gridRow = "1";

        document.getElementById("listaInfoFormacao").textContent = "◙◙◙○○";
        document.getElementById("listaInfoFormacao").style.gridRow = "2";
        
        document.getElementById("listaInfoPortfolio").textContent = "◙◙○○○";
        document.getElementById("listaInfoPortfolio").style.gridRow = "3";

        document.getElementById("listaInfoContatos").innerHTML = "◙◙◙◙◙";
        document.getElementById("listaInfoContatos").style.gridRow = "4";

        document.getElementById("legenda").style.visibility = "visible";
        Sô̴̢ṉ̷͂ǐ̴̭ɔ̴͆͜();
    }
}

/*Função do botão "Portfólio": Vai perguntar se vai querer baixar uma cópia do meu
portfólio. Se 'SIM', vai perguntar se quer baixar em inglês, onde, se "Sim", vai baixar
em Inglês ou, se "Não", em português depois de confirmar no popup de alerta*/;
function portfolio() {
    if (numeroPortfolio == 0) {
        let resposta = window.prompt("Deseja baixar um portfólio? \n SIM ou NÃO?");
        resposta = resposta.toLowerCase();
        if (resposta == "sim") {
            linguaPortfolio = window.confirm(`Deseja baixar o portifólio em INGLÊS?
            OK -> SIM Cancelar -> NÃO`);
            if (linguaPortfolio) {
                document.getElementById("downloadPortfolio").setAttribute("href", "Portfólios/CV - letter - Copia.pdf");
                document.getElementById("downloadPortfolio").download = document.getElementById("downloadPortfolio").getAttribute("href");
                window.alert("Clique novamente para baixar o arquivo");
                numeroPortfolio = 1;
            } else {
                document.getElementById("downloadPortfolio").setAttribute("href", "Portfólios/CV - letter (BR) - Copia.pdf");
                document.getElementById("downloadPortfolio").download = document.getElementById("downloadPortfolio").getAttribute("href");
                window.alert("Clique novamente para baixar o arquivo");
                numeroPortfolio = 1;
            }
        } else if (resposta == null || resposta != "sim") {
            window.alert("Operação Cancelada!!!");
        }
    } else {
        numeroPortfolio = 0;
        document.getElementById("downloadPortfolio").removeAttribute("href");
        document.getElementById("downloadPortfolio").removeAttribute("download");
    }
}

/*Função do botão "Contatos": Exibe os meios de contatos que você, indivíduo que está
lendo o meu código ou usuário que clicou esse botão*/;
function contatos() {
    window.alert(`                                          Contatos:
Linkedin: www.linkedin.com/in/luigi-martins-da-silva-zoldan-giampaoli;
GitHub: https://github.com/Luigissj;
Numero de Telefone: (+55) 51 98034-5322;
Gmail: luigigiampaoli1@gmail.com;`);
}

//Algo de errado está acontecendo aqui... mas parece fazer parte do programa;
function Sô̴̢ṉ̷͂ǐ̴̭ɔ̴͆͜() {
    if (fundo == "Fundo Sonic" || fundo == "Sonic?") {
        aleatorio = Math.floor(Math.random() * 100);
        if (aleatorio <= 20) {
            document.getElementById("icone").src = "Imagens/SonicE.gif";
            fundo = "Sonic?";
        } else {
            document.getElementById("icone").src = "Imagens/Sonic.gif";
        }
    }
}

//Susto!???
function jumpscare() {
    document.getElementById("icone").removeEventListener("click", jumpscare);
    document.getElementById("icone").removeAttribute("title");
    clearInterval(intervalo);
    clearInterval(piscadinha);
    document.getElementById("icone").src = "Imagens/SonicEX.png";
    document.getElementById("imagemSobreMim").src = "Imagens/SonicE Eye.png";
    document.getElementById("imagemSobreMim").style.paddingLeft = "10px";
    document.getElementById("imagemSobreMim").style.width = "25px";
    document.getElementById("imagemSobreMim").style.height = "25px";
    document.getElementById("imagemSobreMim").style.gridColumnStart = "14";
    document.getElementById("imagemSobreMim").style.gridColumnEnd = "20";
    document.getElementById("imagemSobreMim").style.gridRowStart = "6";
    document.getElementById("imagemSobreMim").style.gridRowEnd = "15";
    document.getElementById("Eu").style.visibility = "hidden";
    setTimeout(() => { document.getElementById("imagemSobreMim").style.visibility = "visible"; audioIcone.src = "Audios/mus_sfx_eyeflash.wav"; audioIcone.play(); document.getElementById("imagemSobreMim").animate([{ opacity: "3%" }, { opacity: "75%" }], { duration: 1000 }); }, 2000);
    setTimeout(() => { audioIcone.src = "Audios/mus_sfx_eyeflash.wav"; audioIcone.play() }, 2000);
    setTimeout(() => { document.getElementById("icone").src = "Imagens/SonicEX 1.png"; document.getElementById("icone").style.opacity = "15%"; document.getElementById("imagemSobreMim").style.opacity = "60%" }, 3000);
    setTimeout(() => { document.getElementById("icone").src = "Imagens/SonicEX 2.png"; document.getElementById("icone").style.opacity = "25%"; document.getElementById("imagemSobreMim").style.opacity = "45%" }, 3100);
    setTimeout(() => { document.getElementById("icone").src = "Imagens/SonicEX 3.png"; document.getElementById("icone").style.opacity = "35%"; document.getElementById("imagemSobreMim").style.opacity = "30%" }, 3200);
    setTimeout(() => { document.getElementById("icone").src = "Imagens/SonicEX 4.png"; document.getElementById("icone").style.opacity = "45%"; document.getElementById("imagemSobreMim").style.opacity = "15%" }, 3300);
    setTimeout(() => { document.getElementById("icone").src = "Imagens/SonicEX 5.png"; document.getElementById("icone").style.opacity = "55%"; document.getElementById("imagemSobreMim").style.visibility = "hidden" }, 3400);
    setTimeout(() => { document.getElementById("icone").src = "Imagens/SonicEX 6.png"; document.getElementById("icone").style.opacity = "65%" }, 3500);
    setTimeout(() => { document.getElementById("icone").src = "Imagens/SonicEX 7.png"; document.getElementById("icone").style.opacity = "75%" }, 3600);
    setTimeout(() => { audioIcone.src = "Audios/mus_f_endnote.wav"; audioIcone.play(); document.getElementById("icone").animate([{ marginLeft: "-5px" }, { marginTop: "-5px" }, { marginLeft: "5px" }, { marginTop: "5px" }], { duration: 100, iterations: 40 }) }, 4000);
    setTimeout(() => {document.getElementById("icone").src = "Imagens/SonicEX 7-1.png"; setTimeout(() => {document.getElementById("icone").src = "Imagens/SonicEX 7-2.png"; setTimeout(() => {document.getElementById("icone").src = "Imagens/SonicEX 7-3.png"; setTimeout(() => {document.getElementById("icone").src = "Imagens/SonicEX 7-4.png"; setTimeout(() => {document.getElementById("icone").src = "Imagens/SonicEX 7-5.png";}, 100)}, 100)}, 100)}, 100)}, 6500)
    setTimeout(() => { audioIcone.pause(); document.getElementById("icone").style.visibility = "hidden"; document.body.style.backgroundImage = "url('Imagens/GoodBye.png')"; document.body.style.backgroundSize = "180vh 100vh"; document.getElementById("icone").src = "Imagens/jumpscare.jpg"; document.getElementById("icone").style.opacity = "100%"; document.getElementById("icone").style.width = "95vw"; document.getElementById("icone").style.height = "180vh"; document.getElementById("icone").style.gridColumnStart = "1"; document.getElementById("icone").style.gridColumnEnd = "25"; document.getElementById("icone").style.gridRowStart = "1"; document.getElementById("icone").style.gridRowEnd = "25"; }, 7000);
    setTimeout(() => { audioIcone.src = "Audios/Sonic Scream.mp3"; audioIcone.play(); document.getElementById("icone").style.visibility = "visible"; document.getElementById("icone").style.paddingTop = "-20px"; document.body.style.backgroundImage = "url('none')"; document.getElementById("icone").animate([{ marginLeft: "-15px" }, { marginTop: "-15px" }, { marginLeft: "15px" }, { marginTop: "15px" }], { duration: 100, iterations: 33 }); }, 12000);
    setTimeout(() => { audioIcone.pause(); audioIcone.src = "Audios/mus_f_noise.wav"; audioIcone.play(); document.getElementById("icone").src = "Imagens/Turn off.gif" }, 15000);
    setTimeout(() => { document.backgroundImage.style.backgroundImage = "url('none')" }, 16000);
    setTimeout(() => { location.reload() }, 17500);
    //█  ▄█▀ ☰ ☰  ╚╣ ███ █▄█  ◎ |_| ◎
}