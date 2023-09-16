document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const prioritySelect = document.getElementById("priority");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="priority">${priority}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function() {
                li.remove();
            });
        }
    });
});
