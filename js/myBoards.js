// local storage

// MODAL FUNCTIONALITY
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

// BOARD FUNCTIONALITY
const createBoardBtn = document.querySelector('.modal__create-button');
const normalBoards = document.querySelector('.unstarred__container');
const starredBoards = document.querySelector('.starred__container');
const openModalBtn = document.querySelector('.boards__modal-button');

createBoardBtn.addEventListener('click', function() {
  const board = createBoard();
  // normalBoards.insertBefore(board, openModalBtn);
  insertBoard(normalBoards, board, openModalBtn);
});

function insertBoard(container, board, referenceObj = undefined) {
  if (referenceObj !== undefined) {
    container.insertBefore(board, referenceObj);
  } else {
    container.append(board);
  }
}

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
    const starredDiv = document.querySelector('.boards__starred');
    if (star.classList.contains('starred')) {
      insertBoard(starredBoards, board);
      starredDiv.style.display = 'block';
    } else {
      insertBoard(normalBoards, board, openModalBtn);
      if (starredBoards.childElementCount === 0) {
        starredDiv.style.display = 'none';
      }
    }
  });
  return board;
}

// if (starredBoards.childElementCount === 0) {

// }
