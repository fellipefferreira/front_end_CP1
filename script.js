
// Função para ativar e desativar o menu burg
let menu = document.getElementById("menu2_content");
toggleMenu = () => {
    menu.classList.toggle("open-menu");
}

let heartSave = document.getElementById("imgHeart");
toggleHeart = () => {
    heartSave.classList.toggle("openHeart")
}

// function changeIcon(){
//     var img = document.getElementById("imgHeart")
//     img.src = "./img/heart.png"
// }



document.addEventListener('DOMContentLoaded', function() {
    var salvar = document.getElementById('salvar');
 
    // Adiciona um ouvinte de evento para o clique no botão
    salvar.addEventListener('click', function() {
        var salvo = localStorage.getItem('salvo') === 'true';
 
        // Alterna entre os estados "salvo" e "não salvo"
        if (salvo) {
            // Se estava salvo, agora não está mais
            localStorage.removeItem('salvo');
            salvo.classList.remove('salvo');
         
        } else {
            // Se não estava salvo, agora está
            localStorage.setItem('salvo', 'true');
            salvar.classList.add('salvo');
         
        }
    });
 
    // Verifica se há algo salvo no localStorage quando a página é carregada
    if (localStorage.getItem('salvo') === 'true') {
        // Se algo estiver salvo, você pode fazer algo aqui, por exemplo, adicionar uma classe ao botão
        salvar.classList.add('salvo');
    }
});

