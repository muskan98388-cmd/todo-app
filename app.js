let addBtn = document.querySelector("#add-btn");
let taskInput = document.querySelector("#task-input");
let taskList = document.querySelector("#task-list");

addBtn.addEventListener("click", () => {
    addTask();
});

// Enter key se bhi task add ho
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

const addTask = () => {
    let taskText = taskInput.value.trim();

    // Agar input empty ho toh kuch mat karo
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Naya li element banao
    let li = document.createElement("li");

    li.innerHTML = `
        <span></span>
        <div class="task-buttons">
            <button class="done-btn">✔ Done</button>
            <button class="delete-btn">✖ Delete</button>
        </div>
    `;
    li.querySelector("span").textContent = taskText;

    // Done button ka kaam
    li.querySelector(".done-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button ka kaam
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    // Task list mein add karo
    taskList.appendChild(li);

    // Input clear karo
    taskInput.value = "";
};
