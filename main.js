const container = document.querySelector('.container');
const colors = document.querySelector('.colors');
const newGrid= document.querySelector('.newGrid');
const bC = document.querySelector('.blockContainer')
const size = document.querySelector('.size');

const blocks = document.createElement('div');
blocks.classList.add('blocks');


//create 16x16 default canvas

   const white_canvas = document.createElement('div');
    white_canvas.classList.add('white')
    bC.insertBefore(white_canvas, size);




function changeGrid(){
    let num = prompt('What is the size you desire?');
    bC.removeChild(white_canvas);
    bC.insertBefore(blocks, size);
    while (blocks.firstChild) {
        blocks.removeChild(blocks.firstChild);
    }
    for (let i = 0; i < num*num; i++){
        const block = document.createElement('div');
        block.style.width = (600/num) + "px";
        block.style.height = (600/num) + "px";
        block.classList.add('block');
        blocks.appendChild(block);
        bC.insertBefore(blocks, size);
        container.insertBefore(bC, colors);
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 'black';
        });
    }
    
}

newGrid.addEventListener('click', changeGrid);