const btnContainer = document.querySelector('#btnContainer');

btnContainer.addEventListener('click', event=>{
    if(event.target.tagName === "BUTTON"){
        console.log(event.target.innerText);
    }
})