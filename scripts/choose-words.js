//Variaveis globais do game.
var words = ['PESCAR' , 'CORRER' , 'SALTAR' , 'GANHAR' , 'PERDER']

var dict = {
    'PESCAR':'Quem pratica, gosta de mentir',
    'CORRER':'Quando luta contra o relógio',
    'SALTAR':'Canguru',
    'GANHAR':'Chega ser melhor que participar',
    'PERDER':'O importante é participar',
}

var main_word = words[Math.floor(Math.random() * words.length )]

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

    if(letterConv == ' '){
        alert('ERRO: Use apenas letras.')
        elemento.value = " "
        return false
    }

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
            var list_id = window.document.getElementById('word5')
            list_id.innerHTML = `${my_word}`
            alert(`VOCÊ PERDEU! A palavra correta era ${main_word}.`)
            document.location.href = '../index.html' //Jogar para página principal
        } else {
            tentativas++
            //Colocar palavra com cores na lista.
            switch(tentativas){
                case 2:
                    var list_id = window.document.getElementById('word1')
                    list_id.innerHTML = `${my_word}`
                    break
                case 3:
                    var list_id = window.document.getElementById('word2')
                    list_id.innerHTML = `${my_word}`
                    break
                case 4:
                    var list_id = window.document.getElementById('word3')
                    list_id.innerHTML = `${my_word}`
                    break
                case 5:
                    var list_id = window.document.getElementById('word4')
                    list_id.innerHTML = `${my_word}`
                    break
            }
    
            
            //Detectar letras que foram usadas.
        }
    } else {
        alert('PARABÉNS: Você ganhou.')
        document.location.href = '../index.html'
    }
}