function registerFeedBack(){
    let name = document.getElementById('name')
    if (name.value.length < 4) return alert('Preencha o campo do nome')

    let feedback = document.getElementById('feedback')
    if (feedback.value.length < 10) return alert('Preencha o campo do FeedBack')

    let mostrar = document.getElementById('mostrar')
    if (mostrar.checked){
        let zone_feed = document.querySelector('section#feeds')
        let newZone = document.createElement('div')
        let newTitle = document.createElement('h2')
        let newFeed = document.createElement('p')

        newTitle.innerHTML = `${name.value}`
        newZone.appendChild(newTitle)

        newFeed.innerHTML = `${feedback.value}`
        newZone.appendChild(newFeed)

        zone_feed.appendChild(newZone)
    }


    alert('Seu FeedBack foi enviado, muito obrigado :)')
    //document.location.href = '../index.html'
}