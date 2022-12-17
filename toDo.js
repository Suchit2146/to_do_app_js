var MainToDoContainer=document.getElementById('todos')
var input=document.querySelector('.todo-input')
var addingButton=document.querySelector('.add-item')
var deleteButton=document.querySelector('.deleteBtn')

addingButton.addEventListener('click',function(e){
    if(input.value.trim()){

        var ulTag=document.createElement('ul');
        ulTag.classList.add('todo-list-container');

        var todoListDiv=document.createElement('div')
        todoListDiv.classList.add('todo-list')

        var liTag=document.createElement('li')
        liTag.innerHTML=input.value;
        liTag.classList.add('todo-item')


        var buttonDiv=document.createElement('div')
        buttonDiv.classList.add('button')

        var completeButton=document.createElement('button')
        completeButton.classList.add('completed')
        completeButton.innerHTML=`<i class='fas fa-check' ></i>`

        var editButton=document.createElement('button')
        editButton.classList.add('editBtn')
        editButton.innerHTML=`<i class='fas fa-edit' ></i>`
        editButton.onclick=function(){
            editWorking(liTag);
        }

        var trashButton=document.createElement('button')
        trashButton.classList.add('trash')
        trashButton.innerHTML=`<i class='fas fa-trash' ></i>`

        ulTag.appendChild(todoListDiv)
        todoListDiv.appendChild(liTag)
        todoListDiv.appendChild(buttonDiv)
        buttonDiv.appendChild(completeButton)
        buttonDiv.appendChild(editButton)
        buttonDiv.appendChild(trashButton)
        
        MainToDoContainer.appendChild(ulTag)
        // console.log(MainToDoContainer);

        todoListDiv.addEventListener('click',function(e){
            // console.log(e.target);
            var items=e.target;
            if(items.classList[0]==='completed'){
                let todo=items.parentElement;
                let todo2=todo.parentElement;
                todo2.classList.add('line-through')
            }
        })

        todoListDiv.addEventListener('click',function(e){
            // console.log(e.target);
            var items=e.target;
            if(items.classList[0]==='trash'){
                let todo=items.parentElement;
                let todo2=todo.parentElement;
                let todo3=todo2.parentElement;
                todo3.classList.add('fall')
                todo3.addEventListener('transitionend',function(){
                    todo3.remove()
                })
            }
        })


        input.value=''
    }
    else if(input.value===''){
        alert("please fill the input field")
    }
})

function editWorking(e){
    var editValue=prompt('edit the selected item', e.firstChild.nodeValue);
    e.firstChild.nodeValue=editValue
}


function deleteAllElement(){
    var gettingUlTag=document.querySelectorAll('.todo-list-container')

    for(let i=0;i<gettingUlTag.length;i++){
        gettingUlTag[i].remove()
    }

    input.value=''
}