
const tagUl = document.querySelector(".list_cards")

function criarLi(produto){
  
  let id = produto.id 

  const tagLi = document.createElement("li")
  tagLi.classList.add("cards")
  
  const tagImg = document.createElement("img")
  tagImg.classList.add("image_cards")
  
  const tagItem = document.createElement("p")
  tagItem.classList.add("item")
  
  const tagNameItem = document.createElement("h2")
  tagNameItem.classList.add("name_item")
  
  const tagDescription = document.createElement("h3")
tagDescription.classList.add("description")
    
const tagValue = document.createElement("h4")
tagValue.classList.add("value")

const tagButton = document.createElement("button")
tagButton.classList.add("but")

tagImg.src = produto.img
tagItem.innerText = produto.tag
tagNameItem.innerText = produto.nameItem
tagDescription.innerText = produto.description
tagValue.innerText = `R$ ${produto.value},99`
tagButton.innerText = produto.addCart

if(id !== undefined){
tagButton.id = id
}

tagUl.append(tagLi)
tagLi.append(tagImg, tagItem, tagNameItem, tagDescription, tagValue, tagButton)
    
return tagLi

}
//------------------------------------------------------------------------------
function listarCards(){

    for (let i = 0; i <data.length; i++){
        let item = data[i]
        criarLi(item)   
    }
}
listarCards()

//-------------------------------------------------------------------------------
//PESQUISAR PRODUTOS
let sessaoPesquisa = document.querySelector('.section-pesquisa')
sessaoPesquisa.addEventListener('click', interceptar)
let resultadoBusca = []
function interceptar() {
  let inputValor = document.querySelector('input')
  for (let i = 0; i < data.length; i++) {
    let nomeProduto = data[i].nameItem.toLowerCase()
    if (inputValor.value == nomeProduto){
      tagUl.innerHTML = ''
      criarLi(data[i])
    }
  }
}
interceptar(data)
//----------------------------------------------------------------------------------

let botoesProduto = document.getElementsByClassName('but')

for(let i = 0; i < botoesProduto.length; i++){
let botao = botoesProduto[i]

botao.addEventListener('click',function(event){
  let elemento = event.target
  let idElemento = elemento.id

    let produto = procuraObjeto(idElemento)
    console.log(produto)

    if(!produto){
      alert('Cadastro com sucesso!.')
    }else{
      inserirProduto(produto)
    }
    
   })
}

function procuraObjeto(id){
  for (let j = 0; j < data.length; j++){
    let produto = data[j]
    if(produto.id == id){
      return produto
    }
  }
  return false
}

let contador = 0 
let somarTodos = 0

function inserirProduto(produto){
  document.querySelector('.butAddItem').innerHTML = ""
  document.querySelector('.butAddItem2').innerHTML = ""

  document.querySelector('.total').innerHTML = `Total: R$${somarTodos += produto.value},00`
  contador++
  document.querySelector('#quant').innerHTML = `${contador}`


  let listaProdutos = document.querySelector('.listaProdutos')
 
  let li = document.createElement('li')
  let img = document.createElement('img')
  let h2 = document.createElement('h2')
  let h4 = document.createElement('h4')
  let button = document.createElement('button')

  li.classList.add('AddLi')
  img.classList.add('Addimage_cards')
  button.classList.add('buttonRcolor')
  h4.classList.add('price')
  h2.classList.add('AddnameItem')

  img.src = produto.img
  h2.innerText = produto.nameItem
  h4.innerText = `${produto.value},99`
  button.innerHTML = 'Remover'

  button.addEventListener('click',function(event){
  let li = event.path[1]
  li.remove()
  
  document.querySelector('.total').innerHTML = `Total: R$${somarTodos -= produto.value},00`
  contador--
  document.querySelector('#quant').innerHTML = `${contador}`

  if(listaProdutos.children.length == 0){
    document.querySelector('.butAddItem').innerHTML = "Carrinho vazio"
    document.querySelector('.butAddItem2').innerHTML = "Adcione Itens"
  }
  })
  li.append(img,h2,h4,button)

  listaProdutos.appendChild(li)

}



//--------------------------------------------------------------
