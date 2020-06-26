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

// Board functionality
const createBoardBtn = document.querySelector('.modal__create-button');
const boardsContainer = document.querySelector('.boards-container');
const openModalBtn = document.querySelector('.boards__modal-button');

createBoardBtn.addEventListener('click', function() {
  const board = createBoard();
  boardsContainer.insertBefore(board, openModalBtn);
});

const colorBtns = document.querySelectorAll('.modal__color');
colorBtns.forEach(colorBtn => colorBtn.addEventListener('click', setModalColor));
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
    <div class="board__actions">
      <img class="action delete" src="assets/delete-icon.svg" alt="" />
      <img class="action star" src="assets/star.svg" alt="" />
    </div>
  `;
  board.style.background = modalContainer.style.backgroundColor;
  const star = board.querySelector('.star');
  star.addEventListener('click', function() {
    star.classList.toggle('starred');
  });
  return board;
}
