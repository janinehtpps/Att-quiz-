const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a sua casa de  Hogwarts?",
        alternativas: [
            {
                texto: "Grifinoria",
                afirmacao: "Os membros da Grifinória são conhecidos por sua coragem e bravura. Eles são determinados e muitas vezes se destacam em situações que exigem grande força de caráter e coragem. O fundador, Godric Gryffindor, valorizava essas qualidades e escolhia seus alunos com base nelas."
            },
            {
                texto: "lufa-lufa",
                afirmacao: "A Lufa-Lufa é conhecida por valorizar a lealdade, a paciência e o trabalho duro. Os membros dessa casa são muitas vezes justos, leais e dedicados. Helga Hufflepuff, a fundadora, escolhia alunos que fossem trabalhadores e valorizassem a honestidade e a justiça."
            },
            {
                 texto: "Sonserina",
                afirmacao: "A Sonserina é conhecida por valorizar a ambição e a astúcia. Os membros dessa casa são muitas vezes líderes natos e possuem um forte desejo de alcançar seus objetivos. Salazar Slytherin, o fundador, buscava alunos que fossem determinados e tivessem uma grande capacidade de liderança e astúcia."
            },
            {
                 texto: "Corvinal",
                afirmacao: " A casa de Corvinal valoriza a inteligência, sabedoria e criatividade. Seus membros são conhecidos por sua busca pelo conhecimento e amor pelo aprendizado. Rowena Ravenclaw, a fundadora, escolhia alunos que demonstrassem uma mente afiada e uma paixão por descobrir e entender o mundo."
            }
            
        ]
    },
    {
        enunciado: "Qual desses personagens vc mais gosta?",
        alternativas: [
            {
                texto: "Harry potter",
                afirmacao: "Corajoso, altruísta, determinado."
            },
            {
                texto: "luna loovegod",
                afirmacao: "Criativa, excêntrica, perceptiva."
            },
            {
               texto: "Rony",
                afirmacao: " Leal, corajoso, engraçado."
            },
            {
                texto: "Hermione",
                afirmacao: "Inteligente, determinada, justa"  
            }
        ]
    },
    {
        enunciado: "Se vc recebece uma carta para Hogward, qual desses animais vc levaria? ",
        alternativas: [
            {
                texto: "coruja",
                afirmacao: "Usadas para enviar cartas e pacotes. aAs corujas são Inteligentes e capazes de encontrar qualquer destinatário."
            },
            {
                texto: "rato",
                afirmacao: "Ratos sao animais Pequenos, inteligentes e leais. Fáceis de cuidar."
            },
            {
                texto: "gato",
                afirmacao: "Gatos são Independentes, bons caçadores e sensíveis a magia negra.." 
            },
            {
                texto: "sapos",
                afirmacao: "Menos comuns, podem ser usados em poções.Os sapos são Preferidos por bruxos que gostam de animais excêntricos. "
            }
        ]
    },
     {
        enunciado: "qual dessas criaturas magicas vc mais gosta?",
        alternativas: [
            {
                texto: "hipogrifo",
                afirmacao: "Vc e destemid mas tambem muit corajoso."
            },
            {
                texto: "gigante",
                afirmacao: "Vc parece brabo mas tem um corção mito graande."
            },
            {
                texto: "elfo domestico",
                afirmacao: "Vc é uma pessoa doce mas um pouco teimosa." 
            },
            {
                texto: "lobisomem",
                afirmacao: "Vc é uma pessoa corajosa mas muito perigosa. "
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
