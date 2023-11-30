function addItem() {
    var shoppingList = document.getElementById("shoppingList");
    var newItem = document.createElement("li");
    newItem.textContent = "New Item";
    shoppingList.appendChild(newItem);
}

function removeItem() {
    var shoppingList = document.getElementById("shoppingList");
    var lastItem = shoppingList.lastElementChild;
    if (lastItem) {
        shoppingList.removeChild(lastItem);
    }
}
