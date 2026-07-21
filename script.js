// ===========================
// TEXTO DIGITANDO
// ===========================

const texto = "Você entrou na minha vida e transformou tudo. Este pequeno site é só uma maneira de mostrar o quanto eu amo você. 💜";

const typing = document.getElementById("typing");

let i = 0;

function escrever() {

    if (i < texto.length) {

        typing.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 45);

    }

}

window.onload = () => {

    escrever();

};

// ===========================
// SCROLL SUAVE
// ===========================

function scrollSection(id){

    document.getElementById(id).scrollIntoView({

        behavior:"smooth"

    });

}

// ===========================
// CONTADOR
// ===========================

const inicio = new Date("2026-06-28T00:00:00");

function atualizarTempo(){

    const agora = new Date();

    let diferenca = agora - inicio;

    const dias = Math.floor(diferenca / 86400000);

    diferenca %= 86400000;

    const horas = Math.floor(diferenca / 3600000);

    diferenca %= 3600000;

    const minutos = Math.floor(diferenca / 60000);

    diferenca %= 60000;

    const segundos = Math.floor(diferenca / 1000);

    document.getElementById("tempo").innerHTML = `

    <div class="item">

        <h1>${dias}</h1>

        <p>Dias</p>

    </div>

    <div class="item">

        <h1>${horas}</h1>

        <p>Horas</p>

    </div>

    <div class="item">

        <h1>${minutos}</h1>

        <p>Minutos</p>

    </div>

    <div class="item">

        <h1>${segundos}</h1>

        <p>Segundos</p>

    </div>

    `;

}

setInterval(atualizarTempo,1000);

atualizarTempo();

// ===========================
// FRASES
// ===========================

const frases = [

"Você é meu lugar favorito. 💜",

"Obrigado por existir.",

"Meu melhor momento sempre é ao seu lado.",

"Borahae 💜",

"Você é meu maior presente.",

"Eu escolheria você em qualquer universo."

];

const quote = document.querySelector(".quote");

let indice = 0;

function trocarFrase(){

    quote.style.opacity = 0;

    setTimeout(()=>{

        quote.innerHTML = frases[indice];

        quote.style.opacity = 1;

        indice++;

        if(indice >= frases.length){

            indice = 0;

        }

    },500);

}

trocarFrase();

setInterval(trocarFrase,4000);
// =====================================
// BOTÃO SURPRESA
// =====================================

const loveButton = document.getElementById("loveButton");
const surprise = document.getElementById("surprise");
const close = document.getElementById("close");

loveButton.addEventListener("click", () => {

    surprise.classList.add("active");

    criarChuva();

});

close.addEventListener("click", () => {

    surprise.classList.remove("active");

});

// =====================================
// CHUVA DE CORAÇÕES
// =====================================

function criarCoracao(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💜";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (4 + Math.random()*5)+"s";

    heart.style.fontSize = (20 + Math.random()*30)+"px";

    document.querySelector(".floating-hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

function criarChuva(){

    for(let i=0;i<150;i++){

        setTimeout(criarCoracao,i*70);

    }

}

// =====================================
// ANIMAÇÃO AO ROLAR
// =====================================

const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

elementos.forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});

// =====================================
// ZOOM NAS FOTOS
// =====================================

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src);

    });

});

// =====================================
// BRILHOS NO MOUSE
// =====================================

document.addEventListener("mousemove",(e)=>{

    const estrela = document.createElement("span");

    estrela.innerHTML = "✨";

    estrela.style.position = "fixed";

    estrela.style.left = e.clientX + "px";

    estrela.style.top = e.clientY + "px";

    estrela.style.pointerEvents = "none";

    estrela.style.fontSize = "12px";

    estrela.style.transition = "1s";

    document.body.appendChild(estrela);

    setTimeout(()=>{

        estrela.style.opacity="0";

        estrela.style.transform="translateY(-25px)";

    },20);

    setTimeout(()=>{

        estrela.remove();

    },1000);

});

// =====================================
// TÍTULO ANIMADO
// =====================================

let mudar = false;

setInterval(()=>{

    document.title = mudar ?

    "💜 Borahae 💜" :

    "❤️ Eu te amo ❤️";

    mudar = !mudar;

},3000);

// =====================================
// MENSAGEM NO CONSOLE
// =====================================

console.log("Se você está lendo isso... eu amo muito essa menina. 💜");
