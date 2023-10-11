/*let box = document.getElementById('box')
let botaoDia = document.getElementById('butao-dia')
let botaoTarde = document.getElementById('butao-tarde')
let botaoNoite = document.getElementById('butao-noite')

let botaoCachorro = document.getElementById('butao-cachorro')
let botaoGato = document.getElementById('butao-gato')
let botaoGalo = document.getElementById('butao-galo')

let cachorroImg = document.getElementById('cachorro')
let gatoImg = document.getElementById('gato')
let galoImg = document.getElementById('galo')


botaoDia.addEventListener('click', function () {
    box.style.background = "url('céu.png')"
})

botaoTarde.addEventListener('click', function () {
    box.style.background = "url('tarde.png')"
})

botaoNoite.addEventListener('click', function () {
    box.style.background = "url('noite.png')"
})


botaoCachorro.addEventListener('click', function () {
    cachorroImg.style.display = "block"
    gatoImg.style.display = "none"
    galoImg.style.display = "none"

    console.log('teste')
})

botaoGato.addEventListener('click', function () {
    gatoImg.style.display = "block"
    cachorroImg.style.display = "none"
    galoImg.style.display = "none"
    console.log('teste')
})

botaoGalo.addEventListener('click', function () {
    gatoImg.style.display = "none"
    cachorroImg.style.display = "none"
    galoImg.style.display = "block"
    console.log('teste')
})
*/



function trocaImagem(src) {

    console.log('entrei')

    let cachorroImg = document.getElementById('cachorro')
    let gatoImg = document.getElementById('gato')
    let galoImg = document.getElementById('galo')

    console.log(src)

    const imagens = [cachorroImg.src, galoImg.src, galoImg.src]

    imagens.forEach((item) => {
        item.src = src
        console.log(item)
        console.log('funcionando')
    }

    )
}




