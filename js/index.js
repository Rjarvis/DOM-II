// Your code goes here
//DOM objects
const navBtns = document.querySelectorAll('.nav a');
const gamePad = new GamepadEvent('true');

console.log(gamePad);

navBtns.forEach(function(i){
    i.addEventListener('mouseenter',(event)=>{
        changeColor(i, 'green');
        event.target.style.color = 'white';
    });
    i.addEventListener('mouseleave',(event)=>{
        changeColor(i, null);
        event.target.style.color = 'black';
    })
    i.addEventListener('keydown',(event)=>{
        alert(`you clicked on the ${event.target.textContent} button`);
    })
})

function changeColor(obj, color){
    obj.style.backgroundColor = color;
}
