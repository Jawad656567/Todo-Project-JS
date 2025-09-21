let button=document.querySelector("button");
let container=document.querySelector(".con");
let tags=["h4","h3","p","p","p"];


let edit=false;
let currentEntry=null;
let editIndex=null;
for(let i=0; i<array.length; i++){
    const element=array[i];
}


let data=JSON.parse(localStorage("mytodo")||[]);
renderAll();

button.addEventListener("click",(event)=>{l
event.preventDefault();
    let inputs=document.querySelectorAll(".inp");
    let div=document.createElement("div");
    
    if (edit) {
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


    }else{
        let entry=[];
for(let i=0; i<inputs.length; i++){
    entry.push(inputs[i].value);

    // let p=document.createElement(tags[i]);
  
    // p.innerHTML=value;
    // div.appendChild(p);
}
data.push(entry);
localStorage("mytodos",JSON.stringify(data));
renderAll();
    }
});

function renderAll(){
    container.innerHTML="";
    let div=document.createElement("div");
    
    data.forEach((entry,index) => {
        for(let i=0; i<tags.length; i++){
            let output=document.createElement(tags[i]); 
        output.innerHTML=entry[i];
        div.appendChild(output);

        }
        let delbtn=document.createElement("button");
        delbtn.innerText="Delete";
        div.appendChild(delbtn);
        
        let editbtn=document.createElement("button");
        editbtn.innerHTML="Edit";
        div.appendChild(editbtn);
        
        let hr=document.createElement("hr");
        div.appendChild(hr);
        
        container.appendChild(div);


        delbtn.addEventListener("click",()=>{
        data.splice(index,1);
        localStorage.setItem("mytodos",JSON.stringify(data));
        renderAll();
        });
        editbtn.addEventListener("click",()=>{
            let inps = document.querySelectorAll(".inp");
            for (let i = 0; i < tags.length; i++) {
                inps[i].value = entry[i];
            }
            editMode = true;
            currentEntry = entryDiv;
            editIndex = index;
            button.innerHTML = "Update";
        })

    });
}






