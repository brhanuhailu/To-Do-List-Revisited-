import CreateList from './createList.js';
import restoreItems from './restore.js';
import './index.scss';
import clear from './clear.js';

const input = document.getElementById('input');
const clearButton = document.querySelector('.clear');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    new CreateList().create(input.value, false);
    input.value = '';
  }
});

clearButton.addEventListener('click', clear);

window.onload = restoreItems();