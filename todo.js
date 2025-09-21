let children = document.querySelector(".children");
let button = document.querySelector("button");

let tags = ['h1', 'p', 'h3', 'strong', 'h2'];

let editMode = false;
let currentEntry = null;
let editIndex = null;

let data = JSON.parse(localStorage.getItem("mytodo") || "[]");
renderAll();

button.addEventListener("click", (event) => {
    event.preventDefault();
    let inps = document.querySelectorAll(".inp");

    if (editMode) {
        let update = [];
        for (let i = 0; i < inps.length; i++) {
            update.push(inps[i].value);
        }
        data[editIndex] = update;
        localStorage.setItem("mytodo", JSON.stringify(data));

        editMode = false;
        currentEntry = null;
        editIndex = null;
        button.innerHTML = "Add";
        renderAll();
    } else {
        let entry = [];
        for (let i = 0; i < inps.length; i++) {
            entry.push(inps[i].value);
        }
        data.push(entry);
        localStorage.setItem("mytodo", JSON.stringify(data));
        renderAll();
    }

    // Clear input fields after Add or Update
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

        // Edit Button
        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add("edit");
        entryDiv.appendChild(editButton);

        // Delete Button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete");
        entryDiv.appendChild(deleteButton);

        let hr = document.createElement("hr");
        entryDiv.appendChild(hr);
        children.appendChild(entryDiv);

        // DELETE LOGIC
        deleteButton.addEventListener("click", () => {
            data.splice(index, 1);
            localStorage.setItem("mytodo", JSON.stringify(data));
            renderAll();
        });

        // EDIT LOGIC
        editButton.addEventListener("click", () => {
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
