let block = document.querySelector('.block');
let widthX = window.innerWidth;
let heightY = window.innerHeight;

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

const randPositionX = () =>  {
    return Math.floor(Math.random()*(widthX - 90)) + 'px';
}
const randPositionY = () =>  {
    return Math.floor(Math.random()*(heightY - 90)) + 'px';
}

function getRandColorForBlock() {
    return block.style.backgroundColor = `${randColor()}`;
}

function getRandPosition() {
    return block.style.left = `${randPositionX()}`,
    block.style.top = `${randPositionY()}`;
}

setInterval(getRandColorForBlock, 500);
setInterval(getRandPosition, 1000);