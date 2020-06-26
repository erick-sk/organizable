// local storage

// Modal functionality
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.boards__modal-button');
const span = document.getElementsByClassName('close')[0];

modalBtn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Create board functionality
const boardBtn = document.querySelector('.modal__create-button');
boardBtn.addEventListener('click', createBoard);

const colorBtn = document.querySelectorAll('.modal__color');
colorBtn.forEach(color => color.addEventListener('click', setModalColor));
const modalContainer = document.querySelector('.modal__content');

function setModalColor() {
  const { color } = this.dataset;
  modalContainer.style.backgroundColor = color;
}

function createBoard() {
  const boardTitle = document.getElementById('modal__title');
  const board = document.createElement('div');
  board.classList.add('board');
  board.innerHTML = `
    <h1 class="board__title">${boardTitle.value}</h1>
    <div class="board__star-container">
      <img class="board__star" src="assets/star.svg" alt="" />
    </div>
  `;
  board.style.background = modalContainer.style.backgroundColor;
  document.querySelector('.boards-container').prepend(board);
}
