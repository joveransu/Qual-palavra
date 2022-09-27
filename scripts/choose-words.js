//Variaveis globais do game.
var words = ['PESCAR' , 'CORRER' , 'SALTAR', 'PERDER', 'ABAFAR', 'ABANAR', 
            'ACENAR' ,'ACUSAR' ,'ADOCAR', 'ADUBAR', 'AFAGAR', 'AJUDAR', 'ALISTAR',
            'ALUGAR', 'ANOTAR', 'APITAR', 'ATACAR', 'ATIRAR', 'AVISAR', 'AZEDAR',
            'BEIJAR', 'BERRAR', 'BORDAR', 'BROTAR', 'BUSCAR', 'CALCAR', 'CANTAR',
            'CERCAR', 'CHAMAR', 'CHORAR', 'CHUTAR', 'CLICAR', 'CORTAR', 'CUIDAR', 
            'CURVAR', 'DANCAR', 'DEITAR', 'DORMIR', 'EDUCAR', 'ENTRAR', 'ENVIAR', 
            'FATIAR', 'FECHAR', 'FORMAR', 'FILMAR', 'FRITAR', 'GANHAR', 'GOSTAR',
            'GRAVAR', 'IMITAR', 'INATAR', 'JANTAR', 'LACRAR', 'LAMBER', 'LANCAR',
            'LIMPAR', 'MALHAR', 'MAPEAR', 'MARCAR', 'MOLHAR', 'MONTAR', 'MORDER',
            'MULTAR', 'NUTRIR', 'OPERAR', 'PARTIR', 'PENSAR', 'PINTAR', 'PIORAR',
            'PISCAR', 'POUSAR', 'PREGAR', 'QUICAR', 'RACHAR', 'RANGER', 'SACIAR',
            'SALGAR', 'SALVAR', 'SAMBAR', 'SEGUIR', 'SEMEAR', 'SERRAR', 'SERVIR',
            'SOBRAR', 'SOLDAR', 'SONHAR', 'SORRIR', 'SURFAR', 'TAMPAR', 'TECLAR',
            'TORCER', 'TOSSIR', 'TRAMAR', 'TREMER', 'TROCAR', 'VARRER', 'VENDER',
            'VENTAR', 'VESTIR', 'VIAJAR', 'VIGIAR'           

]

var dict = {
    'PESCAR':'Quem pratica, gosta de mentir',
    'CORRER':'Quando luta contra o relógio',
    'SALTAR':'Canguru',
    'GANHAR':'Chega ser melhor que participar',
    'PERDER':'O importante é participar',
    'ABAFAR':'Preso em lugar quente',
    'ABANAR':'Lek', 
    'ACENAR':'Olá sem as mãos',
    'ACUSAR':'Alguns advogados fazem',
    'ADOCAR':'Diabetes',
    'ADUBAR':'Plantações',
    'AFAGAR':'Carinho',
    'AJUDAR':'Suporte',
    'ALUGAR':'Imovel temporário',
    'ANOTAR':'Não esquecer',
    'APITAR':'Juiz de futebol',
    'ATACAR':'A melhor defesa...',
    'ATIRAR':'Sniper',
    'AVISAR':'Quem avisa, amigo é',
    'AZEDAR':'Comida estragada',
    'BEIJAR':'Comum em relacionamentos amorosos',
    'BERRAR':'Crianças mimadas',
    'BORDAR':'Feito a mão',
    'BROTAR':'Planta em crecimento',
    'BUSCAR':'Procurar',
    'CALCAR':'Uma peça de roupa e faz com bota',
    'CANTAR':'Musicas',
    'CERCAR':'Comuns em fazendas',
    'CHAMAR':'Ligações, querer atenção, parece com fogo',
    'CHORAR':'Todas as noites',
    'CHUTAR':'Jogador de futebol',
    'CLICAR':'Mouse',
    'CORTAR':'Lenhador',
    'CUIDAR':'Demostração de amor', 
    'CURVAR':'Rua perigosa',
    'DANCAR':'Uma arte',
    'DEITAR':'Descansar',
    'DORMIR':'Auto desligamento',
    'EDUCAR':'Professor',
    'ENTRAR':'Saida',
    'ENVIAR':'Correios', 
    'FATIAR':'Pizza',
    'FECHAR':'Chave e cadeado',
    'FORMAR':'Sinonimo de criação',
    'FILMAR':'Cinema',
    'FRITAR':'Usa óleo',
    'GOSTAR':'Crush',
    'GRAVAR':'Capturar muitas imagens',
    'IMITAR':'Um cover nato',
    'INATAR':'Que faz parte do indivíduo desde o seu nascimento',
    'JANTAR':'Almoço',
    'LACRAR':'Blogueirinhas fazem',
    'LAMBER':'Picolé',
    'LANCAR':'Arremessar',
    'LIMPAR':'Sujo',
    'MALHAR':'Academia',
    'MAPEAR':'Definir lugares',
    'MARCAR':'Deixar um selo',
    'MOLHAR':'Jogar algum liquido',
    'MONTAR':'Lego',
    'MORDER':'Cachorro raivoso',
    'MULTAR':'Trânsito',
    'NUTRIR':'Alimentação balanceada',
    'OPERAR':'Médicos atuam',
    'PARTIR':'Ir a algum lugar',
    'PENSAR':'A coisa mais rápida do mundo',
    'PINTAR':'Pincel',
    'PIORAR':'Se não melhora',
    'PISCAR':'Olhos',
    'POUSAR':'Avião',
    'PREGAR':'Martelo',
    'QUICAR':'Funk',
    'RACHAR':'Abrir de meio a meio.',
    'RANGER':'Porta velha',
    'SACIAR':'Matar a vontade',
    'SALGAR':'Muito salgado',
    'SALVAR':'Não perder ao deletar',
    'SAMBAR':'Carnaval',
    'SEGUIR':'No instagram é bom, na rua é ruim',
    'SEMEAR':'Preparação do solo',
    'SERRAR':'Criação de objetos de madeiras',
    'SERVIR':'Garçom',
    'SOBRAR':'Resto',
    'SOLDAR':'Colar ferro com ferro',
    'SONHAR':'Geralmente acontece no sono, para alguns durante o dia',
    'SORRIR':'Mostrar os dentes',
    'SURFAR':'Praticado na praia',
    'TAMPAR':'Anti dengue',
    'TECLAR':'Teclado',
    'TORCER':'Acontece muito em estádios',
    'TOSSIR':'Geralmente quando estamos doente',
    'TRAMAR':'Planejamento',
    'TREMER':'Frio ou medo',
    'TROCAR':'Mudanças são essenciais',
    'VARRER':'Limpar com vassouras',
    'VENDER':'Caixa eletrônico de mercados',
    'VENTAR':'Ventilador',
    'VESTIR':'Roupas',
    'VIAJAR':'Longe de casa',
    'VIGIAR':'Policial' 
}

var main_word = words[Math.floor(Math.random() * words.length )].toLocaleUpperCase()

var tip = window.document.getElementById('tip')
tip.innerHTML = `<strong>DICA:</strong> ${dict[main_word]}.`

var tentativas = 1

function convertKeyCodeToLetter(keyCode){
    var letter = ' '
    switch(keyCode){
        case(65):
            letter = 'A'
            break;
        case(66):
            letter = 'B'
            break;
        case(67):
            letter = 'C'
            break;
        case(68):
            letter = 'D'
            break;
        case(69):
            letter = 'E'
            break;
        case(70):
            letter = 'F'
            break;
        case(71):
            letter = 'G'
            break;
        case(72):
            letter = 'H'
            break;
        case(73):
            letter = 'I'
            break;
        case(74):
            letter = 'J'
            break;
        case(75):
            letter = 'K'
            break;
        case(76):
            letter = 'L'
            break;
        case(77):
            letter = 'M'
            break;
        case(78):
            letter = 'N'
            break;
        case(79):
            letter = 'O'
            break;
        case(80):
            letter = 'P'
            break;
        case(81):
            letter = 'Q'
            break;
        case(82):
            letter = 'R'
            break;
        case(83):
            letter = 'S'
            break;
        case(84):
            letter = 'T'
            break;
        case(85):
            letter = 'U'
            break;
        case(86):
            letter = 'V'
            break;
        case(87):
            letter = 'W'
            break;
        case(88):
            letter = 'X'
            break;
        case(89):
            letter = 'Y'
            break;
        case(90):
            letter = 'Z'
            break;
    }
    return letter
}

function nextBox(elemento){
    var id = elemento.id
    var n = Number(id[6]) + Number(1)
    var letterConv = convertKeyCodeToLetter(event.keyCode)
    
    if (event.keyCode == 8){ //BackSpace = Apagar
        return true
    }

    /*
    if(letterConv == ' '){
        alert('ERRO: Use apenas letras.')
        elemento.value = " "
        return false
    }
    */
   
    if(n < 7){
        var newFocus = 'letter' + n
    } else {
        var newFocus = 'letter6'
    }


    elemento.value = letterConv.toUpperCase()

    //Mudar para proxima caixa automático, verificar se não é a ultima e verificar se ja tem alguma letra escrita
    if (id != 'letter6'){
        var nextBox = document.getElementById(newFocus)
        var saveLetter = nextBox.value
        nextBox.value = saveLetter
        if(saveLetter == ' ' || saveLetter.length == 0){
            nextBox.value = " "    
        }
        nextBox.focus()
    }
}

function organizeWordsLetter(id_list, tiped_word){

    var color_word = ""
    //Detectar letras que foram usadas.
    var all_letters = window.document.getElementsByClassName('alfabeto')

    var index_letter
    for(letter_ of all_letters){ //Loop no alfabeto, verificar se a letra ta no lugar certo
        for(index_letter = 0; index_letter < 6; index_letter++){
            if(tiped_word[index_letter] == main_word[index_letter]){
                if (letter_.textContent == tiped_word[index_letter]){
                    letter_.classList.remove("have-letter")
                    letter_.classList.add('correct-letter')
                }
            }
        }
    }

    for(letter_ of all_letters){ //Loop no alfabeto, verificar se contem letra
        for(my_letter of tiped_word){
            if(my_letter == letter_.textContent){ //Verifica a letra atual na tabela
                for(letter_word of main_word){
                    if(my_letter == letter_word){
                        letter_.classList.add('have-letter')
                    }
                }
            }
        }
    }

    for(index_letter = 0; index_letter < 6; index_letter++){
        var control = false
        if(tiped_word[index_letter] == main_word[index_letter]){
            color_word += `<span class="correct-letter">${tiped_word[index_letter]}</span>`
            control = true
        } else {
            for(letter_ of main_word){
                if(letter_ == tiped_word[index_letter]){
                    color_word += `<span class="have-letter">${tiped_word[index_letter]}</span>`
                    control = true
                    break
                }
            }
        }
        if(!control){
            color_word += `<span>${tiped_word[index_letter]}</span>`
        }
    }


    //Lista colorida
    var list_id = window.document.getElementById(id_list)
    list_id.innerHTML = `${color_word}`
}

function verifyWord(){
    var box1 = window.document.getElementById('letter1').value
    if (box1.length == 0 || box1 == ' '){
        alert('ERRO: Preencha todos os campos.')
        return false
    }

    var box2 = window.document.getElementById('letter2').value
    if (box2.length == 0 || box2 == ' '){
        alert('ERRO: Preencha todos os campos.')
        return false
    }

    var box3 = window.document.getElementById('letter3').value
    if (box3.length == 0 || box3 == ' '){
        alert('ERRO: Preencha todos os campos.')
        return false
    }

    var box4 = window.document.getElementById('letter4').value
    if (box4.length == 0 || box4 == ' '){
        alert('ERRO: Preencha todos os campos.')
        return false
    }

    var box5 = window.document.getElementById('letter5').value
    if (box5.length == 0 || box5 == ' '){
        alert('ERRO: Preencha todos os campos.')
        return false
    }

    var box6 = window.document.getElementById('letter6').value
    if (box6.length == 0 || box6 == ' '){
        alert('ERRO: Preencha todos os campos.')
        return false
    }

    my_word = box1 + box2 + box3 + box4 + box5 + box6
    console.log(`Atual: ${main_word}, Digitada: ${my_word}`)

    if (main_word != my_word){
        //Perder uma chance.
        if (tentativas >= 5){
            organizeWordsLetter('word5', my_word)
            alert(`VOCÊ PERDEU! A palavra correta era ${main_word}.`)
            document.location.href = '../index.html' //Jogar para página principal
        } else {
            tentativas++
            //Colocar palavra com cores na lista.
            switch(tentativas){
                case 2:
                    organizeWordsLetter('word1', my_word)
                    break
                case 3:
                    organizeWordsLetter('word2', my_word)
                    break
                case 4:
                    organizeWordsLetter('word3', my_word)
                    break
                case 5:
                    organizeWordsLetter('word4', my_word)
                    break
            }
        }
    } else {
        alert('PARABÉNS: Você ganhou.')
        document.location.href = '../index.html'
    }
}