// Captura o botão e a lista onde os itens serão adicionados
const addButton = document.getElementById("add-button")
const inputField = document.getElementById("add-input")
const itemList = document.querySelector(".items") //

// Função para criar o novo item (li) e adicionar à lista (ul)
addButton.addEventListener("click", function () {
  const itemText = inputField.value
  const regex = /\D+/g

  if (itemText === "") {
    alert("Por favor, adicione um item.")
    return
  } else if (!regex.test(itemText)) {
    alert("Insira somente caracteres")
  } else {
    // Cria o elemento li e a estrutura interna
    const li = document.createElement("li")
    li.className = "item"

    // Cria o wrapper da checkbox
    const checkboxWrapper = document.createElement("div")
    checkboxWrapper.className = "checkbox-wrapper"

    // Cria a imagem de fundo da checkbox
    const checkboxImage = document.createElement("div")
    checkboxImage.className = "checkbox-image"

    // Cria o input da checkbox
    const checkboxInput = document.createElement("input")
    checkboxInput.type = "checkbox"
    checkboxInput.name = "check-item"

    // Adiciona o wrapper da checkbox e o input à estrutura
    checkboxWrapper.appendChild(checkboxImage)
    checkboxWrapper.appendChild(checkboxInput)

    // Cria o parágrafo para o texto do item
    const itemParagraph = document.createElement("p")
    itemParagraph.textContent = itemText

    // Cria a imagem do ícone de deletar
    const deleteIcon = document.createElement("img")
    deleteIcon.src = "assets/delete-02-stroke-rounded.svg"
    deleteIcon.alt = "delete icon"
    deleteIcon.className = "delete-item"

    // Monta a estrutura do li
    li.appendChild(checkboxWrapper)
    li.appendChild(itemParagraph)
    li.appendChild(deleteIcon)

    // Adiciona o li à lista
    itemList.appendChild(li)

    // Limpa o campo de input
    inputField.value = "" // Limpa o campo de input após adicionar o item
  }
})

const alertDelete = document.getElementById("alertDelete")

//funcao de deletar
itemList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-item")) {
    //console.log("deletou")
    const li = event.target.closest("li")
    li.remove()
    alertDelete.classList.remove("hidden")
  }
})

//tirando o alerta de delete da tela
alertDelete.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-alert")) {
    alertDelete.classList.add("hidden")
  }
})
