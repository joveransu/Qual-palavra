function registerFeedBack(){
    let name = document.getElementById('name')
    if (name.value.length < 4) return alert('Preencha o campo do nome')

    let feedback = document.getElementById('feedback')
    if (feedback.value.length < 10) return alert('Preencha o campo do FeedBack')

    alert('Seu FeedBack foi enviado, muito obrigado :)')
    document.location.href = '../index.html'
}