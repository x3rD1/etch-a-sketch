const container = document.querySelector('.container');

//create 16x16 divs with hover effects
for (let i = 0; i < 256; i++){
   const block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
    block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'black';
    });
}

