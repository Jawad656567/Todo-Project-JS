let children = document.querySelector(".children");
let button = document.querySelector("button");
let tags = ['h1', 'p', 'h3', 'strong', 'h2'];

let editMode = false;
let currentEntry = null;
let editIndex = null;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    
}
// Jab page load hoga, localStorage se data uthao
let data = JSON.parse(localStorage.getItem("myTodos")) || [];
renderAll();

button.addEventListener("click", (event) => {
    event.preventDefault();
    let inps = document.querySelectorAll(".inp");

    if (editMode) {
        // Edit mode ke time data update karo
        let updatedEntry = [];
        for (let i = 0; i < inps.length; i++) {
            updatedEntry.push(inps[i].value);
        }
        data[editIndex] = updatedEntry;
        localStorage.setItem("myTodos", JSON.stringify(data));

        editMode = false;
        currentEntry = null;
        editIndex = null;
        button.innerHTML = "Add";
        renderAll();
    } else {
        // Naya entry banate hain
        let entry = [];
        for (let i = 0; i < inps.length; i++) {
            entry.push(inps[i].value);
        }
        data.push(entry);
        localStorage.setItem("myTodos", JSON.stringify(data));
        renderAll();
    }

    inps.forEach(inp => inp.value = "");
});

function renderAll() {
    children.innerHTML = "";

    data.forEach((entry, index) => {
        let entryDiv = document.createElement("div");

        for (let i = 0; i < tags.length; i++) {
            let output = document.createElement(tags[i]);
            output.innerHTML = entry[i];
            entryDiv.appendChild(output);
        }

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("edit");
        entryDiv.appendChild(editBtn);

        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Delete";
        delBtn.classList.add("delete");
        entryDiv.appendChild(delBtn);

        let hr = document.createElement("hr");
        entryDiv.appendChild(hr);

        children.appendChild(entryDiv);

        // Delete Logic
        delBtn.addEventListener("click", () => {
            data.splice(index, 1);
            localStorage.setItem("myTodos", JSON.stringify(data));
            renderAll();
        });

        // Edit Logic
        editBtn.addEventListener("click", () => {
            let inps = document.querySelectorAll(".inp");
            for (let i = 0; i < tags.length; i++) {
                inps[i].value = entry[i];
            }
            editMode = true;
            currentEntry = entryDiv;
            editIndex = index;
            button.innerHTML = "Update";
        });
    });
}  