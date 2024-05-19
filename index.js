document.addEventListener("DOMContentLoaded",()=>{
    const list=document.querySelector(".main ul");
    const forms=document.forms;
    const addform=document.querySelector(".form");
    //remove order
    list.addEventListener("click",(e)=>{
        if(e.target.className=="del"){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })
    //add item
    addform.addEventListener("submit",(e)=>{
        e.preventDefault();

        //create an item
        const value=addform.querySelector('input[type="text"]').value;
        const li=document.createElement('li');
        const formName=document.createElement('span');
        const delbtn=document.createElement('span');

        //add text content
        formName.textContent=value;
        delbtn.textContent="remove";
        if(value===""){
            alert("please enter a valid input");
        }

        //add classes
        formName.classList.add('order');
        delbtn.classList.add('del');

        //append to DOM
        li.appendChild(formName);
        li.appendChild(delbtn);
        list.appendChild(li);
        //clear
        addform.querySelector('input[type="text"]').value="";
    })

})