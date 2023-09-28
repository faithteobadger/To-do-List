const toDoItems = document.getElementsByClassName
("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
        addItem();

})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+ '</div>';

    checkIcon.className = "fa fa-check-circle";
    checkIcon.style.color = "rgb(255, 232, 236)";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "pink";
    })

    divChild.appendChild(checkIcon);
    trashIcon.className = "fa fa-trash";
    trashIcon.style.color = "pink";
    trashIcon.addEventListener("click",function(){
        divParent.remove();
    })
    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';

}
