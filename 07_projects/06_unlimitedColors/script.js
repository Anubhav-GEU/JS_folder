const randomColour = function() {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i=0; i<6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let interValId;
const startChangeColour = function(){
    if (!interValId) {
        interValId = setInterval(changeBGColor,1000);
    }
    function changeBGColor() {
        document.body.style.backgroundColor = randomColour();
    }
}
const stopChangingColour = function(){
    clearInterval(interValId);
    interValId = null; // but after writing this stop button is not working properly.
}


document.querySelector('#start').addEventListener('click',startChangeColour);
document.querySelector('#stop').addEventListener('click',stopChangingColour);