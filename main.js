import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://realtime-database-5bfe7-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

// Adiciona o valor digitado no banco de dados e limpa o input
addButtonEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value
    
  push(shoppingListInDB, inputValue)
    
  clearInputFieldEl()
})

onValue(shoppingListInDB, function(snapshot) {
  // Armazena as keys e values dos itens na variável
  let itemsArray = Object.entries(snapshot.val())
  
  clearShoppingListEl()
  
  // Lista todos os itens adicionados
  for (let i = 0; i < itemsArray.length; i++) {
    let currentItem = itemsArray[i]
    
    // Armazena a key/id do item
    let currentItemID = currentItem[0]
    // Armazena o value do item
    let currentItemValue = currentItem[1]

    appendItemToShoppingListEl(currentItem)
  }
})

function clearShoppingListEl() {
  shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
  inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
  let itemID = item[0]
  let itemValue = item[1]
  
  let newEl = document.createElement("li")
  
  // Inclui o value do item para o newEl
  newEl.textContent = itemValue

  // Remove o item da tela e do DB pelo id com um double click
  newEl.addEventListener("dblclick", function() {
    
    // Seleciona qual banco de dados usar e seu id
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
    remove(exactLocationOfItemInDB)
  })
  
  // Adiciona o novo item na lista de compras
  shoppingListEl.append(newEl)
}