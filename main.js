const container = document.querySelector('.container');

//create 16x16 divs
for (let i = 0; i < 256; i++){
    const block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
}

