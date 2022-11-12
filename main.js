const app = document.querySelector(".app");
const btn = document.querySelector(".btn");
const color_text = document.querySelector(".color");
const changeBackground = document.body;


startup();

btn.addEventListener('click', e => {
    let newColor = `${generateHex()}`
    
    changeBackground.style.backgroundColor = newColor;
    color_text.textContent = `${newColor};`
});

function startup() {
    if (changeBackground.style.backgroundColor == '') {
        changeBackground.style.backgroundColor = `${generateHex()}`;
        color_text.textContent = `${generateHex()};`;
    } else {
        return;
    }
}

function generateHex() {
    const newArray = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];
    let randomHex;
    let value = '#'
    for (let i = 0; i < 6; i++) {
        randomHex = Math.floor(Math.random() * newArray.length)
        value += newArray[randomHex];
    }

    return value;
    
}





