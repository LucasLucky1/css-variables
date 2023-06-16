let corInput= document.querySelector('#cor');
let background =  document.querySelector('.container-img');

corInput.addEventListener('change', (e)=> {
    background.style.backgroundColor =  corInput.value
})

