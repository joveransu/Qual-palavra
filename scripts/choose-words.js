function selectWord() {
    var s1 = ['PESCAR' , 'CORRER' , 'SALTAR' , 'GANHAR' , 'PERDER']
    var s1random = s1[Math.floor(Math.random() * s1.length )]
    var tip = window.document.getElementById('tip')
    tip.innerHTML = `<strong>DICA:</strong> ${s1random}`
}

function nextBox(elemento){
    elemento.value.toUpperCase()
    var id = elemento.id
    var newFocus = 'letter' + Number(elemento.id) + 1
    document.getElementById(newFocus).focus()
    console.log('Sei lá: ' + elemento.value + ', ' + elemento.id)
}

function selectedBox(elemento){
    elemento.style.backgroundColor = '#465A6E'
}