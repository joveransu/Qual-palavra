//Variaveis globais do game.
var words = ['PESCAR' , 'CORRER' , 'SALTAR' , 'GANHAR' , 'PERDER', 'abafar', 'abanar', 
            'acenar' ,'acusar' ,'adocar', 'adubar', 'afagar', 'ajudar', 'alisar',
            'alugar', 'anotar', 'apitar', 'atacar', 'atirar', 'avisar', 'azedar',
            'beijar', 'berrar', 'bordar', 'brotar', 'buscar', 'calcar', 'cantar',
            'cercar', 'chamar', 'chorar', 'chutar', 'clicar', 'cortar', 'cuidar', 
            'curvar', 'dancar', 'deitar', 'dormir', 'educar', 'entrar', 'enviar', 
            'fatiar', 'fechar', 'formar', 'filmar', 'fritar', 'ganhar', 'gostar',
            'gravar', 'imitar', 'inalar', 'jantar', 'lacrar', 'lamber', 'lancar',
            'limpar', 'malhar', 'mapear', 'marcar', 'molhar', 'montar', 'morder',
            'multar', 'nutrir', 'operar', 'partir', 'pensar', 'pintar', 'piorar',
            'piscar', 'pousar', 'pregar', 'quicar', 'rachar', 'ranger', 'saciar',
            'salgar', 'salvar', 'sambar', 'seguir', 'semear', 'serrar', 'servir',
            'sobrar', 'soldar', 'sonhar', 'sorrir', 'surfar', 'tampar', 'teclar',
            'torcer', 'tossir', 'tramar', 'tremer', 'trocar', 'varrer', 'vender',
            'ventar', 'vestir', 'viajar', 'vigiar'           

]

var dict = {
    'PESCAR':'Quem pratica, gosta de mentir',
    'CORRER':'Quando luta contra o relógio',
    'SALTAR':'Canguru',
    'GANHAR':'Chega ser melhor que participar',
    'PERDER':'O importante é participar',
}

var main_word = words[Math.floor(Math.random() * words.length )].toLocaleUpperCase()

var tip = window.document.getElementById('tip')
tip.innerHTML = `<strong>DICA:</strong> Desativada temporariamente.`//${dict[main_word]}.`

var tentativas = 1

function showWord(){
    var element = window.document.getElementById('see-word')
    element.value = main_word
}

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
    var list_id = window.document.getElementById(id_list)
    list_id.innerHTML = `${tiped_word}`

    //Detectar letras que foram usadas.
    
    var all_letters = window.document.getElementsByClassName('alfabeto')

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


    for(letter_ of all_letters){ //Loop no alfabeto, verificar se a letra ta no lugar certo
        if(tiped_word[0] == main_word[0]){
            if (letter_.textContent == tiped_word[0]){
                letter_.classList.add('correct-letter')
            }
        } else if (tiped_word[1] == main_word[1]){
            if (letter_.textContent == tiped_word[1]){
                letter_.classList.add('correct-letter')
            }
        } else if (tiped_word[2] == main_word[2]){
            if (letter_.textContent == tiped_word[2]){
                letter_.classList.add('correct-letter')
            }
        } else if (tiped_word[3] == main_word[3]){
            if (letter_.textContent == tiped_word[3]){
                letter_.classList.add('correct-letter')
            }
        } else if (tiped_word[4] == main_word[4]){
            if (letter_.textContent == tiped_word[4]){
                letter_.classList.add('correct-letter')
            }
        } else if (tiped_word[5] == main_word[5]){
            if (letter_.textContent == tiped_word[5]){
                letter_.classList.add('correct-letter')
            }
        }
    }

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