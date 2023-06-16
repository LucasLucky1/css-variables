//capturando os elementos no DOM
let corInput= document.querySelector('#cor');
let nivelBlur= document.querySelector('#blur');
let nivelSize = document.querySelector('#size');
console.log(nivelBlur,nivelSize)

//capturando a variável css através do ':root'
const root = document.querySelector(':root');


//mudando a cor do fundo de acordo com a mudança no input
corInput.addEventListener('change', ()=> {
    root.style.setProperty('--variavelBackground', corInput.value)
})

//mudando blur de acordo com mudança no input
nivelBlur.addEventListener('change', ()=> {
    root.style.setProperty('--img-blur', (nivelBlur.value)/10+'px')
})

//mudando width de acordo com mudança no input
nivelSize.addEventListener('change', ()=> {
    root.style.setProperty('--img-width', nivelSize.value+'%')
})





