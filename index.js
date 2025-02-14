
bouton = document.querySelector(".btn");
bouton.addEventListener("click",function(){
    n = document.querySelector("#name");
    c = document.querySelector("#content");
    nom =n.value;
    contenu = c.value;
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
    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    
    closeButton.appendChild(icon);
    closeButton.addEventListener("click",function(){
        const selectedItem = closeButton.parentNode;
        selectedItem.remove();});
    textNode.textContent = nom+' : '+contenu;
    newDiv.appendChild(textNode);
    newDiv.appendChild(closeButton);
    cont.appendChild(newDiv);

    
});



