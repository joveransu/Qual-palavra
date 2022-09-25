function selectWord() {
    var s1 = ['PESCAR' , 'CORRER' , 'SALTAR' , 'GANHAR' , 'PERDER']
    var s1random = s1[Math.floor(Math.random() * s1.length )]
    var tip = window.document.getElementById('tip')
    tip.innerHTML = `<strong>DICA:</strong> ${s1random}`
}

function nextBox(elemento){
    console.log(elemento.id)
}

function selectedBox(elemento){
    elemento.style.backgroundColor = '#465A6E'
}