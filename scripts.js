const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keydown", function(e){
    if(e.key === 'Enter'){
        addTask();
    }
})
function addTask(){
    if(inputBox.value === '')
        {
            alert("You must write something!");
        }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = '';
    storeData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
}, false);


function storeData(){
    localStorage.setItem("task",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("task");
}

showTask();