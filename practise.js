let button=document.querySelector("button");

let container=document.querySelector(".con");

let tags=["h1","p","p","p","p"];

let edit=false;
let currentdiv=null;



button.addEventListener("click",(event)=>{
    event.preventDefault();
  
    let inputs=document.querySelectorAll(".inp");

    if(edit){

    let text=document.querySelectorAll(tags.join(","));
    for(let i=0; i<text.length; i++){
    text[i].innerHTML=inputs[i].value;

}
    edit=false;
    currentdiv=null;
    editbtn.innerHTML="Add";

    }else{
        let dive=document.createElement("div");

    for(let i=0; i<inputs.length; i++){
    let value=inputs[i].value;

   let p=document.createElement(tags[i]);

   p.innerHTML=value;

   dive.appendChild(p);


    }
let delbtn=document.createElement("button");
delbtn.innerHTML="Delete";
delbtn.classList.add("del");
dive.appendChild(delbtn);
container.appendChild(dive);

let editbtn=document.createElement("button");
editbtn.innerHTML="Edit";
editbtn.classList.add("edit");
dive.appendChild(editbtn);
container.appendChild(dive);

let hr=document.createElement("hr");
dive.appendChild(hr);
container.appendChild(dive);

editbtn.addEventListener("click",()=>{
    let text=document.querySelectorAll(tags.join(","));

    for(let i=0; i<text.length; i++){
        inputs[i].value=text[i].innerHTML;
    
    
    };

    edit=true;
    currentdiv=dive;
    editbtn.innerHTML="Update";
});
    }

});