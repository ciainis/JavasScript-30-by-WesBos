const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const checkAllButton = document.querySelector('#check-all');
const uncheckAllButton = document.querySelector('#uncheck-all');
const clearButton = document.querySelector('#clear');

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
            <li>
                <input type="checkbox" data-index=${index} id=item${index} 
                ${plate.done ? 'checked' : ''} />
                <label for="item${index}">${plate.text}</label>
            </li>
        `;
    })
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAll() {
  items.forEach(item => (item.done = true));
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAll() {
  items.forEach(item => (item.done = false));
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAll() {
  localStorage.clear();
  populateList(undefined, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkAllButton.addEventListener('click', checkAll);
uncheckAllButton.addEventListener('click', uncheckAll);
clearButton.addEventListener('click', clearAll);

populateList(items, itemsList);
