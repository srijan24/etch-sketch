
// we are making 16x16 grid
let npixels = 18;
let canvasSide = 16*40 + 15;
const MAX_PIX = 50;

// referencing the main canvas
const container = document.querySelector('#mainCanvas');

// setting the height and width of the main canvas
container.style.cssText = `height:${canvasSide}px; width:${canvasSide}px;`;

// let us add the div grids
function fillCanvas(npixels = 16){
    let pxheight = (100 / npixels);
    let pxwidth = (100 / npixels);
    for(let i=0; i<npixels*npixels; i++){
        let elt = document.createElement('div');
        elt.classList.add('pixel');
        elt.setAttribute('id',`pixel${i}`);
        elt.style.cssText = `height:${pxheight}%;width:${pxwidth}%`;
        container.appendChild(elt);
    }
return ;
}
fillCanvas(npixels);

// function to clear canvas
function clearCanvas(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

// let us make a fill function that fills in incase a pixel is clicked
function fillin(e) {
    e.target.classList.add('pixel-filled');
}


// event listener on all the pixels
let pixels = document.querySelectorAll('.pixel');
pixels.forEach((pix) => {
    pix.addEventListener('mouseenter', fillin);
});

// reset button
const btn = document.querySelector('#rset');
btn.addEventListener('click', () => {
    pixels.forEach( (pix) => pix.classList.remove('pixel-filled'));
})

// change canvas function
function canvasChange(e){
    

    let npx = prompt("What size canvas (Enter N for NxN):");
    npx = parseInt(npx);
    if(npx <= 0 || isNaN(npx)){
        alert(`Bad size ${npx} setting to default (16)`);
        npx=16;
    }
    if(npx >= MAX_PIX){
        alert(`No. of pixels ${npx} > ${MAX_PIX} is too large, setting to default (16)`);
        npx=16;
    }



    // clear-out the canvas
    clearCanvas();

    // fill the canvas
    fillCanvas(npx);

    // reset the event-listeners
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pix) => {
        pix.addEventListener('mouseenter', fillin);
    });
    
}

// change canvas
const cc = document.querySelector('#canvch');
cc.addEventListener('click', canvasChange);