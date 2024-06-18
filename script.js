const txttask = document.getElementById("txttask");
const sub = document.getElementById("sub");
const results = document.getElementById("results");

sub.addEventListener("click",function(e){
    if(txttask.value.length > 0){
    e.preventDefault()
    
    const listItem = document.createElement("li");
    const addItem = document.createElement("span");
    const deleteButton = document.createElement("del");
    const doneButton = document.createElement("done");

    addItem.classList.add("item");
    addItem.innerText = txttask.value;
    deleteButton.classList.add("del");
    deleteButton.innerText = "Delete";
    doneButton.classList.add("done");
    doneButton.innerText = "Done";

    listItem.appendChild(addItem);
    listItem.appendChild(deleteButton);
    listItem.appendChild(doneButton);
    results.appendChild(listItem);

    deleteButton.addEventListener("click",function(){
      results.removeChild(listItem);
    })

    doneButton.addEventListener("click",function(){
      const span = listItem.querySelector(".item")
      span.style.color = "#ADFF2F";
      span.style.textDecoration = "line-through";
    })

    txttask.value = "";
    txttask.focus();
    }else{
        e.preventDefault();
    }

})