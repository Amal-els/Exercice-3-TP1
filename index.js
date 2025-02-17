function removeTask(b){
    const selectedItem = b.parentNode;
    selectedItem.remove();
}

function addElement(e,cl){
    const d = document.createElement(e);
    d.classList.add(cl);
    return d;
}

function addTask(){
    n = document.querySelector("#name");
    c = document.querySelector("#content");
    nom = n.value;
    contenu = c.value;
    if(nom == ""||contenu == ""){
        alert("Entrée non valide!");
    }
    else{
    const cont = document.querySelector(".container1");
    const newDiv = addElement("div","added-item");
    const textNode = addElement("p","text_el");
    const icon = addElement("img","icon");
    icon.src="images/trash-can.png";
    icon.width="15";
    icon.height="15";
    icon.style.marginTop="1px";
    icon.style.marginLeft="10px";
    textNode.textContent = nom+' : '+contenu;
    const closeButton = addElement("button","close");
    closeButton.appendChild(icon);
    closeButton.addEventListener("click",()=>removeTask(closeButton));
    newDiv.appendChild(textNode);
    newDiv.appendChild(closeButton);    
    cont.appendChild(newDiv);
    }
}

bouton = document.querySelector(".btn");
bouton.addEventListener("click",()=>addTask());

/*function addTask(){
    n = document.querySelector("#name");
    c = document.querySelector("#content");
    nom =n.value;
    contenu = c.value;
    if(nom == ""||contenu == ""){
        alert("Entrée non valide!");
    }
    else{
    const cont = document.querySelector(".container1")
    const newDiv = document.createElement("div");
    newDiv.classList.add("added-item")
    const textNode = document.createElement("p");
    const icon = document.createElement("img");
    icon.src="images/trash-can.png";
    icon.width="15";
    icon.height="15";
    icon.style.marginTop="1px";
    icon.style.marginLeft="10px";
    textNode.textContent = nom+' : '+contenu;
    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.appendChild(icon);
    closeButton.addEventListener("click",()=>removeTask(closeButton));
    newDiv.appendChild(textNode);
    newDiv.appendChild(closeButton);    
    cont.appendChild(newDiv);
}
}*/





