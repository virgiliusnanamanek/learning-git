const value = document.querySelector('.value');
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const reset = document.querySelector('.reset');
value.innerText = 0;

inc.addEventListener('click', () => {
    value.innerText ++
});
dec.addEventListener('click', () => {
    value.innerText --
});
reset.addEventListener('click', () => {
    value.innerText = 0
});
