const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    console.log('Click!', event);
})

console.log('Detta händer utan att koden stannar upp');

btn.addEventListener('mouseenter', ()=>{
    updateElements('skyblue', 'over')
})

btn.addEventListener('mouseleave', ()=>{
    updateElements('white', 'left')

})

function updateElements(color, text){
    document.body.style.backgroundColor = color;
    btn.innerText = text;
    
}

// när muspekaren lämnar knappen ska bodyn bli vit
// lägg till att texten på knappen ska vara "entered" "left"


// ÖVerkurs men såhär kan man använda argument i sin callbackfunktion
// btn.addEventListener('mouseenter', updateElements('skyblue', 'over'))

// btn.addEventListener('mouseleave', updateElements('white', 'left'))

// function updateElements(color, text){
    

//     return function (event){
//         document.body.style.backgroundColor = color;
//         btn.innerText = text;
//     }
// }
