const container = document.createElement('div');
container.classList.add('container');

const main = document.querySelector('.main');
const body = document.querySelector('body');

const grid = document.createElement('div');
grid.classList.add('grid');
    const newGrid = document.createElement('button');
    newGrid.classList.add('newGrid');
    newGrid.textContent = 'New Grid';

const bC = document.createElement('div')
bC.classList.add('blockContainer');
    const canvas = document.createElement('div');
    canvas.classList.add('canvas');
    canvas.textContent = 'Canvas';
    bC.appendChild(canvas);
    const blocks = document.createElement('div');
    blocks.classList.add('blocks');
    bC.appendChild(blocks);
    const size = document.createElement('div');
    size.classList.add('size');
    size.textContent = 'Choose grid size';
    bC.appendChild(size);
container.appendChild(bC);

const colors = document.createElement('div');
colors.classList.add('colors');
    const button = document.createElement('button');
    button.textContent = 'Choose colors';
    colors.appendChild(button);
container.appendChild(colors);


const draw = document.querySelector('.draw');
draw.addEventListener('click', () => {
    body.removeChild(main);
    body.setAttribute('style', 'background: white');
    body.appendChild(container);
    grid.appendChild(newGrid);
    container.insertBefore(grid, bC);
});


//default canvas
const white_canvas = document.createElement('div');
white_canvas.classList.add('white')
bC.insertBefore(white_canvas, size);


function changeGrid(){
    let num;
    do {
        num = prompt('What is the size you desire? Max size is 100');
    }while(num > 100);
    white_canvas.classList.remove('white');
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
        size.textContent = `${num}`+ ' x ' + `${num}`;
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 'black';
        });
    }
}

newGrid.addEventListener('click', changeGrid);