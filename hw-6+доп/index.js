
async function getRandomColor() {
   
    const randomHex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
  
    const response = await fetch('https://www.thecolorapi.com/id?hex=ffa');
    const colorData = await response.json();
    
   
    const colorHex = colorData.hex.value;
    return colorHex;
}


async function setRandomBackgroundColor() {
    const randomColor = await getRandomColor();
    document.body.style.backgroundColor = randomColor;
}


window.addEventListener('load', setRandomBackgroundColor);