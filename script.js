document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTask");
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });
});


