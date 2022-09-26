function selectWord() {
    var s1 = ['PESCAR' , 'CORRER' , 'SALTAR' , 'GANHAR' , 'PERDER']
    var s1random = s1[Math.floor(Math.random() * s1.length )]
    var tip = window.document.getElementById('tip')
    tip.innerHTML = `<strong>DICA:</strong> ${s1random}`
}

function nextBox(elemento){
    var id = elemento.id
    var n = Number(id[6]) + Number(1)
    if(n < 7){
        var newFocus = 'letter' + n
    } else {
        var newFocus = 'letter6'
    }
    elemento.value = 'a'.toUpperCase()
    console.log(event.keyCode)
    //console.log(`Sei lá: ${newFocus}, ${elemento.value}, ${elemento.id}`)
    var nextBox = document.getElementById(newFocus)

    nextBox.focus()
    nextBox.value = ' '
    //setTimeout(changeBox(elemento, newFocus), 250)
}

function selectedBox(elemento){
    elemento.style.backgroundColor = '#465A6E'
}