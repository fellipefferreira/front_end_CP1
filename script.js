
// Função para ativar e desativar o menu burg
let menu = document.getElementById("menu2_content");
toggleMenu = () => {
    menu.classList.toggle("open-menu");
}

const estadia = [
    {
        id:0,
        estado:'Salvo'
    }
]

//  Criando o array da estadia favoritada
let estadiaFavorita = []

// Pegando elemento HTML
const salvar = document.getElementById('salvar')
const salvo = document.getElementById('btnSalvar')

const renderizarLista = () =>{
    //limpa a tela antes de renderizar
        
        //cria uma nova imagem
        const favoritoImg = document.createElement('img')
        //adiciona imagem ao item img
        favorito.src = 'img/heart-vazio.png'
        //muda o cursor da imagem para mãozinha de clique
        favorito.style.cursor = 'pointer'
        //adiciona evento de clique à imagem
        favorito.addEventListener('click',(e)=>{
            favoritoClicado(e,filme)
        })
        //adiciona a imagem ao item da lista
        itemLista.append(favorito)
    }





//  Função para click de favorito
const favoritoClick = (eventoDeClique, objetoEstadia) => {
    const favoriteState = {
        favorited:'img/heart.png',
        notFavorited:'img/heart-vazio.png'
    }
    // valida se osrc da imagem clicada inclui o caminho da imagem  não favoritada
    if(eventoDeClique.target.src.includes(favoriteState.notFavorited)){
        eventoDeClique.target.src = favoriteState.favorited
        saveToLocalStorage(objetoEstadia)
    }else{
        //senão, manter a imagem de não favoritado e executar a função de remover
        //do localStorage, passando como parâmetro o id do filme
        eventoDeClique.target.src = favoriteState.notFavorited
        removeFromLocalStorage(objetoEstadia.id)
    }
}

//Função para salvar o filme no local storage

const saveToLocalStorage = (objetoEstadia) => {
    //checa se já existe um campo de favorito no local storage
    //Se tiver, ele salva no array estadiaFavorita
    if(localStorage.getItem('favorito')){
        estadiaFavorita = JSON.parse(localStorage.getItem('favorito'))
    }
    //Adiciona a condição de salvo no array de estadia favorita
    estadiaFavorita.push(objetoEstadia)
    //Tranforma o array em string para poder salvar no local storage
    const estadiaJSON = JSON.stringify(estadiaFavorita)
    //Salva no local storage
    localStorage.setItem('favoritos',estadiaJSON)
}

//Função para remover favorito no local storage

function removeFromLocalStorage(id){
    //checa se já existe um campo de favoritos no LocalStorage
    //se houver, ele salva no array filmesFavoritos
    if(localStorage.getItem('favorito')){
        estadiaFavorita = JSON.parse(localStorage.getItem('favorito'));
    }
    //procura no array o id do filme
    const procurarSalvo = estadiaFavorita.find(like => like.id === id)
    //filtra todos os condições que tem o id diferente do que foi encontrado e gera um novo array
    const itemFiltrado = estadiaFavorita.filter(like => like.id != procurarSalvo.id)
    //transforma o array em string para poder salvar no LocalStorage
    const itemFiltradoJSON = JSON.stringify(itemFiltrado)
    //guarda esse novo array no localStorage
    localStorage.getItem('favorito', itemFiltradoJSON)
}

