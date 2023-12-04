let listCount = 0;

function createList() {
    const listContainer = document.getElementById("listContainer");

    const newList = document.createElement("ul");
    newList.id = "list" + listCount;

    listCount++;

    listContainer.appendChild(newList);
}

function appendItem() {
    const listContainer = document.getElementById("listContainer");
    const lists = listContainer.getElementsByTagName("ul");

    if (lists.length === 0) {
        alert("Please create a list first.");
        return;
    }

    const lastList = lists[lists.length - 1];
    const newItem = document.createElement("li");
    newItem.innerText = "Item " + (lastList.childElementCount + 1);

    lastList.appendChild(newItem);
}

function removeList() {
    const listContainer = document.getElementById("listContainer");
    const lists = listContainer.getElementsByTagName("ul");

    if (lists.length === 0) {
        alert("No lists to remove.");
        return;
    }

    const lastList = lists[lists.length - 1];
    listContainer.removeChild(lastList);
}
